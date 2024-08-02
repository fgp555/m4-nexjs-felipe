/* eslint-disable @next/next/no-img-element */
import { ProductPreview } from "@/interfaces/interfaces";
import ButtonProducts from "../ButtonProducts/ButtonProducts";
import CartButton from "../CartButton/CartButton";

const ProductDetail: React.FC<ProductPreview> = ({
  id,
  name,
  description,
  price,
  image,
}) => {
  const product = { id, name, price, image };
  return (
    <div className="flex flex-col items-center w-full mx-auto my-8 text-white bg-black md:max-w-6xl md:px-16 md:flex-row md:mt-14 ">
      <div className="flex-col items-center justify-center w-3/4 space-y-2 md:w-1/2 flex-">
        <img src={image} alt="UnProducto" />
        <ButtonProducts title={"Volver"} color="primary" />
      </div>

      <div className="w-3/4 md:w-1/2 space-y-7">
        <p className="text-3xl font-semibold">{name}</p>

        <p className="font-sans text-lg">{description}</p>

        <p className="text-2xl font-semibold text-secundary">${price}.00</p>
        <CartButton product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;
