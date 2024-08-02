"use client";

import { validateLogin } from "@/helpers/validateLogin";
import { Credential, CredentialErrors } from "@/interfaces/interfaces";
import { ChangeEvent, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import { PATHROUTES } from "@/helpers/PATHROUTES";

const ContactForm: React.FC = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<Credential>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<CredentialErrors>({
    email: "",
    password: "",
  });

  const { user, token, setToken, setUser } = useAuth();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newCredentialData = { ...userData, [name]: value };

    setUserData(newCredentialData);

    const newCredentialErrors = validateLogin(newCredentialData);
    setErrors(newCredentialErrors);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        /*   const response = await fetch("http://localhost:4000/users/login", { */
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (!response.ok) {
          throw new Error("Credenciales inválidas");
        }

        const json = await response.json();

        toast.success(`Bienvenido ${userData.email}`);
        setToken(json.token);
        setUser(json.user);
        localStorage.setItem("userToken", json.token);
        localStorage.setItem("user", JSON.stringify(json.user));
        console.log(user);
        const usercookie = JSON.stringify(user);
        document.cookie = `user=${usercookie} ; path=/; samesite=Lax`;
        router.push(PATHROUTES.PRODUCTS);
      } catch (err: any) {
        toast.error(err.message || "Error en el inicio de sesión");
        console.log(err);
      }
    } else {
      toast.error("Debes ingresar tus credenciales");
    }

    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col max-w-6xl px-10 py-10 mx-auto lg:px-56 bg-primary">
      <Toaster richColors />
      <h1 className="mb-6 text-2xl font-semibold text-center text-secundary">
        Iniciar sesión
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          className="p-2 text-white bg-black rounded-md"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder={userData.email ? "" : "e-mail"}
        />
        {errors.email && (
          <p className="text-xs text-secundary">{errors.email}</p>
        )}

        <input
          className="p-2 text-white bg-black rounded-md"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder={userData.password ? "" : "password"}
        />
        {errors.password && (
          <p className="text-xs text-secundary">{errors.password}</p>
        )}

        <button className="py-2 text-white rounded-md bg-secundary">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
