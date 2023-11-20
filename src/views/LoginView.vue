<template>
  <ion-page>
    <ion-content>
      <form @submit="login">
        <div class="ion-text-center ion-padding login" text-center>
          <ion-label>Usuario</ion-label>
          <ion-input
            type="text"
            required
            v-model="usuarios.name"
            class="input-login"
          ></ion-input>
          <br />
          <ion-label>Contraseña</ion-label>
          <ion-input
            type="password"
            required
            v-model="usuarios.password"
          ></ion-input>
          <ion-select
            class="ion-align-items-center"
            placeholder="Roles"
            required
            v-model="usuarios.role"
          >
            <ion-select-option value="Alumno"
              >Alumnos</ion-select-option
            >
            <ion-select-option value="Profesor"
              >Profesores</ion-select-option
            >
            <ion-select-option value="Padres"
              >Padres</ion-select-option
            >
          </ion-select>
          <ion-button
            type="submit"
            value="Iniciar"
            class="buttom-login"
            color="light"
            >Iniciar</ion-button
          >
        </div>
      </form>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonContent,
  IonInput,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { Method } from "ionicons/dist/types/stencil-public-runtime";
import { ref } from "vue";

async function login(event: any) {
  event.preventDefault();
  try {
    fetch("url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuarios.value),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error: ", error));
  } catch (error) {
    console.log("Error", error);
  }
}

const usuarios = ref({
  name: "",
  password: "",
  role: "",
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
form {
  background: rgba(5, 255, 255, 0.548);
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin: auto;
  margin-top: 200px;
}
form .login {
  padding: 20px;
}
</style>
