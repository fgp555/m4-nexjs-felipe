"use client";
import { validateRegister } from "../../helpers/validateRegister";
import { ChangeEvent, useState } from "react";
import { User, Errors } from "@/interfaces/interfaces";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import { PATHROUTES } from "@/helpers/PATHROUTES";

const Register: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<User>({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newUserData = { ...userData, [name]: value };

    setUserData(newUserData);

    const newErrors = validateRegister(newUserData);
    setErrors(newErrors);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      try {
        /* const response = await fetch("http://localhost:4000/users/register", { */
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ ...userData }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Error al registrar");
        }

        toast.success(`Usuario registrado con el mail ${userData.email}`);
        toast.info("Por favor inicia sesión");
        router.push(PATHROUTES.LOGIN);
      } catch (error: any) {
        toast.error("Hubo un problema intenta de nuevo");
        toast.error(error.message);
      }
    } else {
      toast.error("Algunos datos son erroneos o faltan datos");
    }

    setUserData({
      name: "",
      email: "",
      address: "",
      phone: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col max-w-6xl px-10 py-10 mx-auto lg:px-56 bg-primary">
      <Toaster expand={true} />
      <div className="flex flex-col mb-0">
        <p className="text-2xl font-semibold text-center text-secundary">
          Registrate
        </p>
        <p className="mb-6 text-lg font-semibold text-center text-secundary">
          Comienza a recibir los beneficios
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          className="p-2 text-white bg-black rounded-md"
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder={userData.name ? "" : "Nombre"}
        />
        {errors.name && <p className="text-xs text-secundary">{errors.name}</p>}

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
          type="text"
          name="address"
          value={userData.address}
          onChange={handleChange}
          placeholder={
            userData.address
              ? ""
              : "Dirección (Calle , Colonia, No.ext., No. Int.,  C.P, Alcaldia, Ciudad)"
          }
        />
        {errors.address && (
          <p className="text-xs text-secundary">{errors.address}</p>
        )}

        <input
          className="p-2 text-white bg-black rounded-md"
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          placeholder={userData.phone ? "" : "Telefono"}
        />
        {errors.phone && (
          <p className="text-xs text-secundary">{errors.phone}</p>
        )}

        <input
          className="p-2 text-white bg-black rounded-md"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder={userData.password ? "" : "Password"}
        />
        {errors.password && (
          <p className="text-xs text-secundary">{errors.password}</p>
        )}

        <button className="py-2 text-white rounded-md bg-secundary">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
