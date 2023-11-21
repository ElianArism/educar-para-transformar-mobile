import { getStudentsByProfessorDNI } from "@/db/students";
import { subjectsByProfessor } from "@/db/subjects";

export const SistemaDeGestionService = (professorDNI: number) => {
  const url: string = "https://backendmobile1-eg103nk5.b4a.run/api";

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const getStudents = async () => {
    try {
      const result = await fetch(`${url}/student/${professorDNI}`);
      const response = await result.json();
      console.log(response);
      return getStudentsByProfessorDNI;
    } catch (error) {
      console.log(error);
    }
  };

  const getSubjects = async () => {
    try {
      const result = await fetch(`${url}/subject/${professorDNI}`);
      const response = await result.json();
      console.log(response);
      return subjectsByProfessor;
    } catch (error) {
      console.log(error);
    }
  };

  const getClassrooms = async () => {
    try {
      const result = await fetch(`${url}/classroom/`);
      const response = await result.json();
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const assignClassroom = async () => {};

  return {
    getStudents,
    getClassrooms,
    getSubjects,
  };
};
