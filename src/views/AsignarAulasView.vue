<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title color="secondary">Asignaciones</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding contenedor">
      <h3 class="font-size">Dni del alumno: {{ studentDNI }}</h3>
      <br />
      <h3 class="font-size">Materias</h3>
      <ion-select
        v-model="selectedSubject"
        label="Elija materia"
        label-placement="floating"
        fill="outline"
      >
        <ion-select-option
          v-for="subject in subjects"
          :key="subject.subjectCode"
          :value="subject.name"
        >
          {{ subject.name }}
        </ion-select-option>
      </ion-select>
      <h3 class="font-size">Horarios</h3>
      <ion-select
        v-model="selectedSchedule"
        label="Elija horario"
        label-placement="floating"
        fill="outline"
      >
        <ion-select-option
          v-for="schedule in schedules"
          :key="schedule.classroomsCode"
          :value="getFormattedSchedule(schedule)"
        >
          {{ getFormattedSchedule(schedule) }}
        </ion-select-option>
      </ion-select>
      <br />
      <ion-button @click="confirmAssignment" class="font-size"
        >Confirmar</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const studentDNI = ref("studentDNI");
const subjects = ref<Subject[]>([]);
const schedules = ref<Schedule[]>([]);
const selectedSubject = ref("");
const selectedSchedule = ref("");

interface Subject {
  subjectCode: number;
  name: string;
}

interface Schedule {
  classroomsCode: number;
  name: string;
  schedulerCode: number;
  startTime: string;
  endTime: string;
  day: string;
}

const fetchSubjects = async () => {
  try {
    const response = await fetch(
      "https://backendmobile1-eg103nk5.b4a.run/api/subject/"
    );
    const data = await response.json();
    subjects.value = data;
  } catch (error) {
    console.error("Error al obtener las materias", error);
  }
};

const fetchSchedules = async () => {
  try {
    const response = await fetch(
      "https://backendmobile1-eg103nk5.b4a.run/api/scheduler/"
    );
    const data = await response.json();
    schedules.value = data;
  } catch (error) {
    console.error("Error al obtener los horarios", error);
  }
};

const getFormattedSchedule = (schedule: Schedule) => {
  return `${schedule.day} ${schedule.startTime} - ${schedule.startTime} en ${schedule.name}`;
};

const confirmAssignment = async () => {
  try {
    const response = await fetch(
      "https://backendmobile1-eg103nk5.b4a.run/api/assignments/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentDNI: studentDNI.value,
          subjectCode: subjects.value.find(
            (subject) => subject.name === selectedSubject.value
          )?.subjectCode,
          classroomsCode: schedules.value.find(
            (schedule) =>
              getFormattedSchedule(schedule) ===
              selectedSchedule.value
          )?.classroomsCode,
        }),
      }
    );

    const data = await response.json();

    if (data.ok) {
      console.log("Asignacion confirmada con exito");
    } else {
      console.error("Error al confirmar la asignacion");
    }
  } catch (error) {
    console.error("Error al confirmar la asignacion", error);
  }
};

onMounted(() => {
  fetchSubjects();
  fetchSchedules();
});
</script>

<style scoped>
.contenedor {
  padding: 10px;
  margin-top: 20px;
  text-align: center;
}
ion-select {
  background-color: var(--ion-item-background);
}
</style>
