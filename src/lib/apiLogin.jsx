export const loginUser = async (email, password) => {
    const response = await fetch(
      "https://ll6aenqwm9.execute-api.us-east-1.amazonaws.com/service/lambda-01-login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
  
    if (!response.ok) {
      throw new Error("Error al conectar con el servidor");
    }
  
    const data = await response.json();
    if (data.status !== "SUCCESS") {
      throw new Error(data.message || "Error al iniciar sesión");
    }
  
    return data;
  };