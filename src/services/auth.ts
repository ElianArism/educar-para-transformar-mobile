export const loginService = async (dni: number, password: string) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const result = await fetch(
      `https://backendmobile1-eg103nk5.b4a.run/api/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({ dni, password }),
        headers: headers,
      }
    );
    const response = await result.json();

    return response;
  } catch (error) {
    console.log(error);
  }
};
