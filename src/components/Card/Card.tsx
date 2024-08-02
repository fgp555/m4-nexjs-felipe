/* eslint-disable @next/next/no-img-element */
import { ProductPreview } from "@/interfaces/interfaces";
import React from "react";
import Link from "next/link";
import CartButton from "../CartButton/CartButton";

const Card: React.FC<ProductPreview> = ({
  id,
  name,
  description,
  price,
  image,
}) => {
  const product = { id, name, price, image };
  return (
    <div className="flex flex-col px-6 py-4 space-y-5 rounded shadow bg-primary shadow-white">
      <Link href={`/products/${id}`}>
        <img
          className="object-contain w-full h-64 transition-all opacity-90 hover:opacity-100 hover:scale-105"
          src={image}
          alt={name}
        />
      </Link>

      <h2 className="text-2xl font-semibold text-center text-white ">{name}</h2>
      {/* <p className="flex-1 hidden font-sans text-sm text-white sm:block">
        {description}
      </p> */}
      <div className="flex items-center justify-between">
        <CartButton product={product} />
        <p className="text-2xl font-semibold text-secundary text-end">
          ${price}.00
        </p>
      </div>
    </div>
  );
};

export default Card;
