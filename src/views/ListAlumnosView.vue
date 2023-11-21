<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"> </ion-menu-button>
        </ion-buttons>
        <ion-title color="tertiary">Tablas de Alumnos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="pagina">
      <ion-select
        label="Filtrar por Materia"
        label-placement="floating"
        interface="popover"
        @ion-change="filterStudentsBySubject($event.detail.value)"
        fill="outline"
        class="select-materia"
      >
        <ion-select-option value="todos">
          Todos los alumnos
        </ion-select-option>
        <ion-select-option
          v-for="(subj, subjIndx) in subjects"
          :value="subj.subjectCode"
          :key="'subject' + subjIndx"
        >
          {{ subj.name }}
        </ion-select-option>
      </ion-select>
      <ion-grid :fixed="true">
        <h2>Tabla de Alumnos</h2>
        <ion-row class="header-list">
          <ion-col size="3">Apellido</ion-col>
          <ion-col size="3">Nombre</ion-col>
          <ion-col size="3">Dni</ion-col>
          <ion-col size="3">Aula</ion-col>
        </ion-row>
        <ion-row v-for="s in alumnos">
          <ion-col size="3">{{ s.studentDNI }}</ion-col>
          <ion-col size="3">{{ s.studentName }}</ion-col>
          <ion-col size="3">{{ s.studentLastName }}</ion-col>
          <ion-col size="3">
            <RouterLink
              v-if="!s.classroomName && selectedSubject"
              :to="
                '/asignacion/' +
                s.studentDNI +
                '/' +
                subjects[selectedSubject - 1].name
              "
              ><ion-button color="tertiary"
                >Asignar</ion-button
              ></RouterLink
            >

            <span
              v-if="!selectedSubject && !s.classroomName"
              color="tertiary"
            >
              -
            </span>

            <span v-if="s.classroomName">
              {{ s.schedulerDay }} - {{ s.schedulerStartTime }}/{{
                s.schedulerEndTime
              }}</span
            >
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import { RouterLink } from "vue-router";

import { onMounted, ref } from "vue";
import { SistemaDeGestionService } from "../services/sistema-de-gestion";

const selectedSubject = ref<any>(undefined);
const alumnosBckp = ref<any>([]);
const alumnos = ref<any>([]);

const subjectsBckp = ref<any>([]);
const subjects = ref<any>([]);
const user = JSON.parse(localStorage.getItem("usuario") ?? "");
const { getStudents, getSubjects } = SistemaDeGestionService(
  user.dni
);

const filterStudentsBySubject = (subjectCode: number | "todos") => {
  if (subjectCode === "todos") {
    selectedSubject.value = undefined;
    alumnos.value = alumnosBckp.value;
    return;
  }
  selectedSubject.value = subjectCode;
  alumnos.value = alumnosBckp.value.filter(
    (s: any) => s.subjectCode === subjectCode
  );
};
onMounted(async () => {
  const students = await getStudents();
  const subjectsList = await getSubjects();

  alumnosBckp.value = (students as any)[user.dni];
  alumnos.value = (students as any)[user.dni];
  subjects.value = (subjectsList as any)[user.dni];
  subjectsBckp.value = (subjectsList as any)[user.dni];
  selectedSubject.value = (subjectsList as any)[0];

  filterStudentsBySubject("todos");
});
</script>

<style scoped>
.pagina {
  padding: 10px;
}

ion-col {
  background-color: var(--ion-color-primary);
  border: solid 1px #fff;
  color: #fff;
  text-align: center;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

ion-grid {
  margin-top: 50px;
}
.header-list {
  text-transform: uppercase;
}
ion-select {
  margin-top: 50px;
}
.select-materia {
  background-color: var(--ion-item-background);
}

@media only screen and (max-width: 420px) {
  .pagina {
    padding: 20px;
  }
  .botton-asignar {
    width: 75px;
  }
  .select-materia {
    padding: 5px;
  }
}
</style>
