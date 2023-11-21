<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title color="secondary">Asignaciones</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="contenedor">
        <h3>Dni del alumno: {{ studentDni }}</h3>
        <br />
        <h3>Materia</h3>
        {{ subjectName }}
        <h3>Aulas / Horarios</h3>
        <ion-select
          label="Elija Horario"
          label-placement="floating"
          @ion-change="onSelectedClassroom($event)"
          fill="outline"
        >
          <ion-select-option
            v-for="(c, clIndx) in classrooms"
            :value="clIndx"
            :key="'t' + clIndx"
          >
            {{ c.name }} - {{ c.startTime }}/{{ c.endTime }}
          </ion-select-option>
        </ion-select>
        <br />
        <ion-button
          v-if="!toggle"
          @click="assignScheduler()"
          color="secondary"
          >Confirmar</ion-button
        >

        <RouterLink v-if="toggle" to="/listAlumnos">
          Volver
        </RouterLink>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import { onMounted, ref, toRaw } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { getStudentsByProfessorDNI } from "../db/students";
import { SistemaDeGestionService } from "../services/sistema-de-gestion";
const toggle = ref(false);
const studentDni = useRoute().params.dni;
const subjectName = useRoute().params.subject;

const selectedClassroom = ref<any>();

const user = JSON.parse(localStorage.getItem("usuario") ?? "");
const classroomsBckp = ref<any>([]);
const classrooms = ref<any>([]);

const { getClassrooms } = SistemaDeGestionService(user.dni);

const onSelectedClassroom = (e: any) => {
  selectedClassroom.value = e.detail.value;
};

const assignScheduler = () => {
  getStudentsByProfessorDNI[user.dni] = getStudentsByProfessorDNI[
    user.dni
  ].map((s: any) => {
    if (s.studentDNI === Number(studentDni)) {
      const obj = toRaw(classrooms.value[selectedClassroom.value]);
      return {
        ...s,
        schedulerDay: obj.day,
        schedulerEndTime: obj.endTime,
        schedulerStartTime: obj.startTime,
        classroomName: obj.name,
      };
    }
    return s;
  });
  toggle.value = true;
};

onMounted(async () => {
  const { data: classroomList } = await getClassrooms();

  classroomsBckp.value = classroomList;
  classrooms.value = classroomList;
});
</script>

<style scoped>
.contenedor {
  padding: 10px;
  margin-top: 20px;
  text-align: center;
}
ion-select {
  background-color: var(--ion-item-background);
}
</style>
