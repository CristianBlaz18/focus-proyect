import React, { useState } from "react";
import { useAuth } from "../../hook/useAuth";
import { useAuthContext } from "../../context/AuthContext";




const Login = () => {
    const {login,error,loading}= useAuth();
    const {login:setAuth}= useAuthContext();

    const [email,setEmail]=useState("");
    const [password,setPassword] = useState("");
    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const data = await login(email,password);
            setAuth(data.entities, data.token)
            console.log("Inició sesión con éxito");
            console.log("Email:", email, "Password:", password);
        } catch (error) {
            console.error("Error al iniciar sesión", error);
        }
    }
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-600 to-blue-500">
            <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-md text-center">
                <div className="mb-8">
                    <div className="relative bg-gradient-to-br from-indigo-600 via-blue-500 to-green-500 rounded-lg shadow-lg p-6 flex items-center justify-center text-white">
                        <div className="relative z-10 text-center">
                            <img 
                                src='../src/assets/icon_focusclass.png' 
                                alt="Icono FocusClass" 
                                className="mx-auto w-20 h-20 object-contain mb-3"
                            />
                            <h1 className="text-3xl font-bold">FocusClass</h1>
                            <p className="text-sm font-light">Organiza tus clases de manera eficiente</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                    <div className="text-left">
                        <label htmlFor="username" className="block text-sm font-medium text-blue-600 mb-2">
                            Correo electronico
                        </label>
                        <input
                            type="email"
                            id="username"
                            name="username"
                            placeholder="Ingresa tu email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-gray-700"
                        />
                    </div>

                    <div className="text-left">
                        <label htmlFor="password" className="block text-sm font-medium text-blue-600 mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-gray-700"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-indigo-600 transition duration-300"
                    >
                         {loading ? "Cargando..." : "Iniciar sesión"}
                    </button>
                    
                    <a
                        href="#"
                        className="block mt-4 text-sm text-red-500 hover:underline"
                    >
                        ¿Olvidaste tu contraseña?
                    </a>
                    
                </form>
            </div>
        </div>
  );
};

export default Login;