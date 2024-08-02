"use client";

import React from "react";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { PATHROUTES } from "@/helpers/PATHROUTES";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

const Auth: React.FC = () => {
  const router = useRouter();
  const { token, setToken, user } = useAuth();

  const logoutHandler = () => {
    setToken(null);
    localStorage.clear();
    document.cookie =
      "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=strict;";
    toast.success("Sesión terminada");
    router.push("/");
  };
  return (
    <div className="flex justify-end">
      <Toaster position="bottom-right" />
      {token && user ? (
        <div className="flex space-x-5">
          <h2 className="text-white ">Hola {user.name}</h2>
          <Link href={"/dashboard"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="cursor-pointer size-6 text-secundary hover:scale-110"
            >
              <title>Mi cuenta</title>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>

          <Link href={PATHROUTES.CART}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-[#ff0000] hover:scale-110 cursor-pointer"
            >
              <title>Mi carrito</title>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="cursor-pointer size-6 text-secundary hover:scale-110"
            onClick={logoutHandler}
          >
            <title>Cerrar sesión</title>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
            />
          </svg>
        </div>
      ) : (
        <Link href={PATHROUTES.LOGIN}>
          <button className="text-white justify-end flex  hover:text-slate-400 hover:scale-125">
            Iniciar sesión
          </button>
        </Link>
      )}
    </div>
  );
};

export default Auth;
