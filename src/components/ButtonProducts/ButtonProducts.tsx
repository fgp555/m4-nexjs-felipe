import { ButtonProductsTypes } from "@/interfaces/interfaces";
import Link from "next/link";

const ButtonProducts: React.FC<ButtonProductsTypes> = ({ title, color }) => {
  return (
    <Link href={"/products"}>
      <div
        className={`flex justify-center text-white w-1/4 py-2 rounded bg-${color}`}
      >
        <p className="text-xs md:text-sm">{title}</p>
      </div>
    </Link>
  );
};

export default ButtonProducts;
