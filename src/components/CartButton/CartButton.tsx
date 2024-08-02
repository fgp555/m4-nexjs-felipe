"use client";

import React from "react";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { PATHROUTES } from "@/helpers/PATHROUTES";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { CartButtonProps } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";

const CartButton: React.FC<CartButtonProps> = ({ product }: any) => {
  const router = useRouter();
  const path = usePathname();
  const { user, token } = useAuth();
  const pathSlug = /^\/products\/\d+$/.test(path);

  const handleAddCart = () => {
    toast.success("Producto agregado a tu carrito");
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updateCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updateCart));
    router.push(PATHROUTES.PRODUCTS);
  };

  return (
    <div className="w-1/2 ">
      {user && token ? (
        <button
          onClick={handleAddCart}
          className="p-1 text-sm text-center rounded cursor-pointer bg-secundary"
        >
          +Agregar
        </button>
      ) : (
        pathSlug && (
          <Link href={PATHROUTES.LOGIN}>
            <p className="p-1 text-xs text-center rounded bg-primary">
              Inicia sesión para comprar
            </p>
          </Link>
        )
      )}
    </div>
  );
};

export default CartButton;
