<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title color="secondary">Estilos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="contenedor">
        <h3 class="text">Tamaño de letras</h3>
        <ion-select
          label="Elegir Tamaño de letra"
          label-placement="floating"
          fill="outline"
        >
          <ion-select-option value="">Chico</ion-select-option>
          <ion-select-option value="">Mediano</ion-select-option>
          <ion-select-option value="">Grande</ion-select-option>
        </ion-select>
        <h4 class="text">Hola mundo!</h4>
        <h5 class="text">Hola mundo!</h5>
        <p class="text">Hola mundo!</p>
        <br />
        <h3 class="text">Paleta de colores</h3>
        <ion-select
          @ion-change="onChangeTheme($event)"
          label="Elegir Paleta"
          label-placement="floating"
          fill="outline"
        >
          <ion-select-option value="electric"
            >Electrico</ion-select-option
          >
          <ion-select-option value="dark">Darkside</ion-select-option>
          <ion-select-option value="">Lightside</ion-select-option>
        </ion-select>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

const onChangeTheme = (e: any) => {
  const theme = e.detail.value;
  document.body.setAttribute("color-theme", theme);
  localStorage.setItem("theme", theme);
};
</script>

<style scoped>
.contenedor {
  padding: 10px;
}

ion-select {
  background-color: var(--ion-item-background);
}
</style>
