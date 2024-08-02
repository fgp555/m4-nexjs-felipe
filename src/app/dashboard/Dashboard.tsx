/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import fetchOrders from "@/helpers/fetchOrders";
import { Order } from "@/interfaces/interfaces";

const Dashboard: React.FC = () => {
  const { token, user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);

  console.log("token", token);
  console.log("user", user);

  useEffect(() => {
    const fetchOrderUsers = async () => {
      if (token) {
        try {
          const fetchedOrders = await fetchOrders(token);
          setOrders(fetchedOrders);
        } catch (error) {
          console.log("Error al solicitar las ordenes");
        }
      } else {
        console.log("Token no valido");
      }
    };
    fetchOrderUsers();
  }, [token]);

  return (
    <div className="max-w-6xl mx-auto mt-8 text-center text-white">
      <h2 className="text-2xl font-semibold">Perfil de usuario</h2>
      <div className="flex items-center justify-center max-w-6xl py-8 mx-auto mt-6 bg-primary">
        <div className="flex items-center justify-center w-1/2">
          <img className="h-80" src="https://i.ibb.co/sJz2Rg1/red.jpg" alt="tribal" />
        </div>

        <div className="flex flex-col w-1/2 space-y-6 text-start">
          {user ? (
            <>
              <div>
                <p className="text-secundary">Nombre:</p>
                <p className="font-sans text-xl">{user.name}</p>
              </div>
              <div>
                <p className="text-secundary">Email:</p>
                <p className="font-sans text-xl">{user.email}</p>
              </div>
              <div>
                <p className="text-secundary">Dirección:</p>
                <p className="font-sans text-xl">{user.address}</p>
              </div>
              <div>
                <p className="text-secundary">Teléfono:</p>
                <p className="font-sans text-xl">{user.phone}</p>
              </div>
            </>
          ) : (
            <p className="text-secundary">Usuario no disponible</p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-2xl font-semibold">Historial de compras</p>
      </div>

      <div className="flex py-8 my-5 justify-center bg-primary">
        {orders?.length === 0 ? (
          <span> No tienes ninguna compra</span>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-5">
            {orders?.map((order) => (
              <div key={order.id} className="flex p-2 bg-secundary">
                <div className="flex flex-col">
                  <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
                  <p>Status: {order.status}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
