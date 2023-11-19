<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <!-- <ion-title>{{ $route.params.id }}</ion-title> -->
      <ion-title>Perfil</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-card class="profile">
    <img
      alt="Silhouette of mountains"
      src="../../resources/Perfil.jpg"
    />
    <ion-card-header>
      <ion-card-title>Perfil</ion-card-title>
      <ion-card-subtitle>{{ profile.role }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <h5>Nombre: {{ profile.name }}</h5>
      <hr />
      <h5>Apellido: {{ profile.lastName }}</h5>
      <hr />
      <h5>Fecha de Nacimiento: {{ profile.birthDate }}</h5>
    </ion-card-content>
  </ion-card>
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
} from "@ionic/vue";

import { defineComponent } from "vue";

const profile = {
  name: "Diego",
  lastName: "Maradona",
  birthDate: "30/10/1960",
  role: "Profesor",
};
console.log(profile);
</script>
<style scoped>
.profile {
  width: 400px;
  margin: auto;
  margin-top: 150px;
  border-radius: 10px;
}
</style>
