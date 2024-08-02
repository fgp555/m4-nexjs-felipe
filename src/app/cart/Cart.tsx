/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Order, Product, User } from "@/interfaces/interfaces";
import ButtonProducts from "@/components/ButtonProducts/ButtonProducts";
import { useAuth } from "@/hooks/useAuth";
import { createOrder } from "@/helpers/createOrder";
import { Toaster } from "sonner";
import { useRouter } from "next/navigation";

const Cart: React.FC = () => {
  const router = useRouter();

  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const { token, setUser, user } = useAuth();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (storedCart && storedCart.length > 0) {
      let totalCart = 0;
      storedCart.forEach((product: Product) => {
        totalCart += product.price;
      });

      setTotal(totalCart);
      setCart(storedCart);
    }
  }, []);

  const handlePurchase = async () => {
    const productsId = cart.map((product) => product.id);
    const order = await createOrder(token!, productsId);

    setCart([]);
    setTotal(0);
    localStorage.removeItem("cart");
    router.push("/");
  };

  return (
    <div className="max-w-6xl mx-auto text-white flex flex-col my-6 ">
      <Toaster />
      {cart.length > 0 && (
        <p className=" text-2xl font-semibold mb-4">Carrito:</p>
      )}
      {cart.length === 0 ? (
        <div className="bg-primary flex flex-col py-5 px-8 space-y-6 ">
          <p className="font-semibold text-2xl">
            No hay productos en el carrito
          </p>
          <p className="text-sm mb-5">
            Explora nuestra catalogo, tenemos lo que buscas al mejor precio
          </p>
          <ButtonProducts title="Productos" color="secundary" />
        </div>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="flex items-center  bg-primary py-5">
            <div className="px-8 flex ">
              <img className="h-40" src={product.image} alt={product.name} />
            </div>
            <div className="flex flex-col ">
              <h2>{product.name}</h2>
              <p>${product.price}.00</p>
            </div>
          </div>
        ))
      )}
      <hr />
      <div className="bg-primary flex flex-col space-y-3 justify-end p-5 ">
        <h2 className="flex justify-end">Total: ${total}.00</h2>
        {cart.length > 0 && (
          <button
            onClick={handlePurchase}
            className="rounded  bg-secundary p-2"
          >
            Comprar
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
