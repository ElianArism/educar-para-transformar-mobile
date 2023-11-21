<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"> </ion-menu-button>
        </ion-buttons>
        <ion-title color="secondary">Tablas de Alumnos</ion-title>
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
          <ion-col size="3">Asignar Aula</ion-col>
        </ion-row>
        <ion-row v-for="s in alumnos">
          <ion-col size="3">{{ s.studentDNI }}</ion-col>
          <ion-col size="3">{{ s.studentName }}</ion-col>
          <ion-col size="3">{{ s.studentLastName }}</ion-col>
          <ion-col size="3"
            ><RouterLink to="/asignacion"
              ><ion-button color="secondary" class="botton-asignar"
                >Asignar</ion-button
              ></RouterLink
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

const selectedSubject = ref<{ subjectCode: number; name: string }>();

const alumnosBckp = ref<any>([]);
const alumnos = ref<any>([]);

const subjectsBckp = ref<any>([]);
const subjects = ref<any>([]);

const { getStudents, getSubjects } =
  SistemaDeGestionService(43222224);

const filterStudentsBySubject = (subjectCode: number | "todos") => {
  if (subjectCode === "todos") {
    alumnos.value = alumnosBckp.value;
    return;
  }
  alumnos.value = alumnosBckp.value.filter(
    (s: any) => s.subjectCode === subjectCode
  );
};

onMounted(async () => {
  const { data } = await getStudents();
  const { data: subjectsList } = await getSubjects();

  alumnosBckp.value = data;
  subjects.value = subjectsList;
  subjectsBckp.value = subjectsList;
  selectedSubject.value = subjectsList[0];

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
