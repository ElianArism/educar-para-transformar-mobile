import { IonCol, IonGrid } from '@ionic/vue';
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"> </ion-menu-button>
        </ion-buttons>
        <ion-title color="secondary">Tablas de Aulas</ion-title>
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
        <ion-select-option value="Fisica I"
          >Fisica I</ion-select-option
        >
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
        <h2 class="text font-size">Tabla de Aulas</h2>
        <ion-row class="header-list">
          <ion-col size="3">Aula</ion-col>
          <ion-col size="3">Materia</ion-col>
          <ion-col size="6">Horario</ion-col>
        </ion-row>
        <ion-row v-for="c in classroomList">
          <ion-col size="3">{{ c.name }}</ion-col>
          <ion-col size="3">{{ c.day }}</ion-col>
          <ion-col size="6"
            >Desde {{ c.startTime }} hasta {{ c.endTime }}</ion-col
          >
        </ion-row>
      </ion-grid>
    </div>
  </ion-page>
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

import { onMounted, ref } from "vue";
import { SistemaDeGestionService } from "../services/sistema-de-gestion";

const classroomList = ref<any>([]);
const { getClassrooms } = SistemaDeGestionService(43222224);

onMounted(async () => {
  const { data } = await getClassrooms();
  classroomList.value = data;
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
  margin-top: 20px;
}
.header-list {
  text-transform: uppercase;
}
ion-select {
  margin-top: 30px;
}
.select-materia {
  background-color: var(--ion-item-background);
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
