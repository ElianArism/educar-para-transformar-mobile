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
    <ion-content>
      <div class="pagina">
        <ion-grid :fixed="true">
          <h2 class="text">Tabla de Aulas</h2>
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
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import { onMounted, ref } from "vue";
import { SistemaDeGestionService } from "../services/sistema-de-gestion";

const classroomList = ref<any>([]);
const { getClassrooms } = SistemaDeGestionService(43222224);

onMounted(async () => {
  const { data } = await getClassrooms();
  classroomList.value = data.slice(0, 10);
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
</style>
