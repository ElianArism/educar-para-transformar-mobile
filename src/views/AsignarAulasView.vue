<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <!-- <ion-title>{{ $route.params.id }}</ion-title> -->
      <ion-title>Asignaciones</ion-title>
    </ion-toolbar>
  </ion-header>
  <div class="contenedor">
    <h3>Dni del alumno: dni alumno</h3>
    <br />
    <h3>Materias</h3>
    <ion-select
      label="Elija materia"
      label-placement="floating"
      fill="outline"
    >
      <ion-select-option value="Matematicas"
        >Matematicas</ion-select-option
      >
      <ion-select-option value="Fisica I">Fisica I</ion-select-option>
      <ion-select-option value="Programacion I"
        >Programacion I</ion-select-option
      >
    </ion-select>
    <h3>Horarios</h3>
    <ion-select
      label="Elija Horario"
      label-placement="floating"
      fill="outline"
    >
      <ion-select-option value="Lunes 12:45 a 14:00"
        >Lunes 12:45 a 14:00</ion-select-option
      >
      <ion-select-option value="Martes 12:50 a 14:30"
        >Martes 12:50 a 14:30</ion-select-option
      >
      <ion-select-option value="Miercoles 14:00 a 16:00"
        >Miercoles 14:00 a 16:00</ion-select-option
      >
    </ion-select>
    <br />
    <ion-button>Confirmar</ion-button>
  </div>
</template>

<script lang="ts" setup>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonHeader,
  IonButton,
  IonContent,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonButtons,
} from "@ionic/vue";
const aulas = [
  {
    nameAula: "A.4",
    horariosEntrada: "12:45",
    horariosSalida: "14:00",
  },
  {
    nameAula: "A.4",
    horariosEntrada: "14:30",
    horariosSalida: "16:00",
  },
  {
    nameAula: "A.6",
    horariosEntrada: "14:30",
    horariosSalida: "16:00",
  },
];
</script>
<style scoped>
.contenedor {
  padding: 10px;
  margin-top: 20px;
  text-align: center;
}
ion-select {
  background-color: #0f53b8;
}
</style>
