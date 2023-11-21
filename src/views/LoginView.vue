<template>
  <ion-page>
    <ion-content>
      <form @submit="login">
        <div class="ion-text-center ion-padding login" text-center>
          <ion-label>Usuario Dni</ion-label>
          <ion-input
            type="text"
            required
            v-model="usuarios.dni"
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
  alertController,
} from "@ionic/vue";
import { Method } from "ionicons/dist/types/stencil-public-runtime";
import { ref } from "vue";
import { loginService } from "../services/auth";
import { useRouter } from "vue-router";
const router = useRouter();
async function login(event: any) {
  event.preventDefault();
  const alert = await alertController.create({
    header: "ERROR",
    subHeader: "Rol Equivocado",
    message: "Vuelva a Elejir su rol",
  });

  try {
    if (
      usuarios.value.role == "Alumno" ||
      usuarios.value.role == "Padres"
    ) {
      await alert.present();
      return;
    }
    const respuesta = await loginService(
      Number(usuarios.value.dni),
      usuarios.value.password
    );
    if (respuesta.ok == false) {
      console.log(respuesta.error.messege);
      alert.message = `Error en ingresar datos ${respuesta.error.message}`;
      await alert.present();
      return;
    }
    console.log(respuesta);
    localStorage.setItem("usuario", JSON.stringify(respuesta.data));
    router.push({ name: "profile" });
  } catch (error: any) {
    console.log("error", error);
  }
}

const usuarios = ref({
  dni: "",
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
