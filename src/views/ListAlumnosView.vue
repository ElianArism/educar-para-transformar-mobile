<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"> </ion-menu-button>
      </ion-buttons>
      <ion-title>Tablas de Alumnos</ion-title>
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
      <h2>Tabla de Alumnos</h2>
      <ion-row class="header-list">
        <ion-col size="3" size-sm="3">Apellido</ion-col>
        <ion-col size="3" size-sm="3">Nombre</ion-col>
        <ion-col size="3" size-sm="3">Dni</ion-col>
        <ion-col size="3" size-sm="3">Asignar a Aula</ion-col>
      </ion-row>
      <ion-row v-for="alumno in alumnos">
        <ion-col size="3" size-sm="3">{{ alumno.lastName }}</ion-col>
        <ion-col size="3" size-sm="3">{{ alumno.name }}</ion-col>
        <ion-col size="3" size-sm="3">{{ alumno.dni }}</ion-col>
        <ion-col size="3" size-sm="3"
          ><RouterLink to="/asignacion"
            ><ion-button class="botton-asignar"
              >Asignar</ion-button
            ></RouterLink
          >
        </ion-col>
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
import { ref } from "vue";
import { RouterLink } from "vue-router";
const alumnos = ref([
  {
    name: "Dieguin",
    lastName: "Barrios",
    birthdate: "16/08/2001",
    role: "Alumno",
    dni: "1234567",
  },
  {
    name: "Elian",
    lastName: "Arismendi",
    birthdate: "12/10/2000",
    role: "Alumno",
    dni: "1234567",
  },
  {
    name: "Maxi",
    lastName: "Insfran",
    birthdate: "12/10/2000",
    role: "Alumno",
    dni: "1234567",
  },
]);
// export default {
//   setup() {
//     fetch("peticion get")
//       .then((response) => response.json())
//       .then((data: any) => (alumnos.value = data));

//     return { data };
//   },
// };
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
  margin-top: 50px;
}
.header-list {
  text-transform: uppercase;
}
ion-select {
  margin-top: 50px;
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
