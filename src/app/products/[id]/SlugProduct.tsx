import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { ProducDetailParams } from "@/interfaces/interfaces";
import React from "react";
import { fetchDataProducts } from "@/helpers/fetchProducts";

const SlugProduct: React.FC<ProducDetailParams> = async ({ params }) => {
  const idProduct = Number(params.id);

  /* const products = await fetchDataProducts("http://localhost:4000/products"); */
  const products = await fetchDataProducts(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );

  const product = products.find(
    (product: { id: number }) => product.id === idProduct
  );

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <ProductDetail
      id={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
      image={product.image}
    />
  );
};

export default SlugProduct;
