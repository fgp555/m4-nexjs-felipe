import React from "react";
/* import products from "@/data/productsData"; */
import Card from "../Card/Card";

// "https://s7v9zfq0-4000.usw3.devtunnels.ms/products"


import { fetchDataProducts } from "@/helpers/fetchProducts";
import { ProductPreview } from "@/interfaces/interfaces";

const ListCards: React.FC = async () => {
  /*  const products = await fetchDataProducts("http://localhost:4000/products"); */
  const products = await fetchDataProducts();

  return (
    <div className="grid max-w-6xl gap-5 p-6 mx-auto mt-3 bg-black sm:grid-cols-2 md:grid-cols-3">
      {products.map(
        (product: React.JSX.IntrinsicAttributes & ProductPreview) => (
          <Card key={product.id} {...product} />
        )
      )}
    </div>
  );
};

export default ListCards;
