<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title color="secondary">Perfil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="contenedor">
      <ion-card class="profile">
        <img
          alt="Silhouette of mountains"
          src="../../resources/Perfil.jpg"
        />
        <ion-card-header>
          <ion-card-title>Perfil</ion-card-title>
          <ion-card-subtitle>{{ usuario.role }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <h5 class="font-size">Nombre: {{ usuario.name }}</h5>
          <hr />
          <h5 class="font-size">Apellido: {{ usuario.lastName }}</h5>
          <hr />
          <h5 class="font-size">
            Fecha de Nacimiento: {{ usuario.birthDate }}
          </h5>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
const usuario = JSON.parse(localStorage.getItem("usuario") ?? "");
</script>
<style scoped>
.contenedor {
  padding: 10px;
}
.profile {
  width: 300px;
  margin: auto;
  margin-top: 150px;
  border-radius: 10px;
}
</style>
