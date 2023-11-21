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
        <h3 class="text font-size">Tamaño de letras</h3>
        <ion-select
          label="Elegir Tamaño de letra"
          label-placement="floating"
          fill="outline"
          v-model="fontSize"
          @ionChange="onChangeFontSize($event)"
        >
          <ion-select-option value="small">Chico</ion-select-option>
          <ion-select-option value="medium"
            >Mediano</ion-select-option
          >
          <ion-select-option value="large">Grande</ion-select-option>
        </ion-select>
        <h4 class="text font-size">Hola mundo!</h4>
        <h5 class="text font-size">Hola mundo!</h5>
        <p class="text font-size">Hola mundo!</p>
        <br />
        <h3 class="text font-size">Paleta de colores</h3>
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
import { ref } from "vue";

const onChangeTheme = (e: any) => {
  const theme = e.detail.value;
  document.body.setAttribute("color-theme", theme);
  localStorage.setItem("theme", theme);
};

let fontSize = ref("");

const onChangeFontSize = (e: any) => {
  const selectedOption = e.detail.value;

  switch (selectedOption) {
    case "small":
      fontSize.value = "14px";
      break;
    case "medium":
      fontSize.value = "16px";
      break;
    case "large":
      fontSize.value = "18px";
      break;
    default:
      break;
  }

  getComputedStyle(
    document.querySelector(":root") as any
  ).setProperty("--font-size", fontSize.value);
};
</script>

<style scoped>
.contenedor {
  padding: 10px;
}

ion-select {
  background-color: var(--ion-item-background);
}

.font-size {
  font-size: var(--font-size);
}
</style>
