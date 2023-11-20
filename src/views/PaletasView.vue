<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <!-- <ion-title>{{ $route.params.id }}</ion-title> -->
      <ion-title>Estilos</ion-title>
    </ion-toolbar>
  </ion-header>
  <div class="contenedor">
    <h3>Tamaño de letras</h3>
    <ion-select
      label="Elegir Tamaño de letra"
      label-placement="floating"
      fill="outline"
    >
      <ion-select-option value="">Chico</ion-select-option>
      <ion-select-option value="">Mediano</ion-select-option>
      <ion-select-option value="">Grande</ion-select-option>
    </ion-select>
    <h1>Hola mundo!</h1>
    <h2>Hola mundo!</h2>
    <h3>Hola mundo!</h3>
    <h4>Hola mundo!</h4>
    <h5>Hola mundo!</h5>
    <p>Hola mundo!</p>
    <br />
    <h3>Paleta de colores</h3>
    <ion-select
      label="Elegir Paleta"
      label-placement="floating"
      fill="outline"
    >
      <ion-select-option value="Electrico"
        >Electrico</ion-select-option
      >
      <ion-select-option value="Darkside">Darkside</ion-select-option>
      <ion-select-option value="Lightside"
        >Lightside</ion-select-option
      >
    </ion-select>
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
</script>
<style scoped>
.contenedor {
  padding: 10px;
  margin-top: 20px;
}
ion-select {
  background-color: #0f53b8;
}
</style>
