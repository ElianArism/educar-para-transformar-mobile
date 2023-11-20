import { IonCol, IonGrid } from '@ionic/vue';
<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"> </ion-menu-button>
      </ion-buttons>
      <ion-title>Tablas de Aulas</ion-title>
    </ion-toolbar>
  </ion-header>
  <div class="pagina">
    <ion-select
      label="Filtrar por Materia"
      label-placement="floating"
      fill="outline"
      class="select-materia"
    >
      <ion-select-option value="Matematica"
        >Matematica</ion-select-option
      >
      <ion-select-option value="Fisica I">Fisica I</ion-select-option>
      <ion-select-option value="Programacion I"
        >Programacion I</ion-select-option
      >
      <ion-select-option value="Programacion II"
        >Programacion II</ion-select-option
      >
      <ion-select-option value="Metodologia de Sistemas"
        >Metodologia de Sistemas</ion-select-option
      >
      <ion-select-option value="Estadistica"
        >Estadistica</ion-select-option
      >
    </ion-select>
    <ion-grid :fixed="true">
      <h2>Tabla de Aulas</h2>
      <ion-row class="header-list">
        <ion-col size="4">Aula</ion-col>
        <ion-col size="4">Materia</ion-col>
        <ion-col size="4">Horario</ion-col>
      </ion-row>
      <ion-row v-for="clase in clases">
        <ion-col size="4">{{ clase.nameClase }}</ion-col>
        <ion-col size="4">{{ clase.nameMateria }}</ion-col>
        <ion-col size="4">{{ clase.horario }}</ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>
<script lang="ts" setup>
import {
  IonButton,
  IonSearchbar,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonButtons,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";
const clases = [
  {
    nameClase: "A.5",
    nameMateria: "Fisica",
    horario: "12:45 a 14",
  },
  {
    nameClase: "A.5",
    nameMateria: "Matematica",
    horario: "14:30 a 16",
  },
  {
    nameClase: "A.4",
    nameMateria: "Programacion I",
    horario: "12:45 a 14",
  },
];
</script>

<style scoped>
.pagina {
  padding: 10px;
}
ion-col {
  background-color: #0f53b8;
  border: solid 1px #fff;
  color: #fff;
  text-align: center;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
ion-grid {
  margin-top: 20px;
}
.header-list {
  text-transform: uppercase;
}
ion-select {
  margin-top: 30px;
}
.select-materia {
  background-color: #0f53b8;
}
.botton-asignar {
  width: 80px;
}
/* @media only screen and (max-width: 412px) {
  ion-grid {
    width: 350px;
    height: 300px;
  }
} */
</style>
