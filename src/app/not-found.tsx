import Image from "next/image";
import cup from "../../public/mezcal-3-removebg-preview.png";

const NotFound: React.FC = () => {
  return (
    <div className=" flex items-center text-white justify-center max-w-6xl mx-auto">
      <div className=" flex flex-col space-y-10 max-w-3xl justify-center items-center my-10 shadow-sm shadow-slate-500 p-12 rounded bg-[#0d0c0c]">
        <h2 className="text-3xl text-center">
          Parece que la pagina que buscas no existe o cambio de lugar...
        </h2>
        <h2 className="text-[100px] font-bold text-[#ff0000]">404</h2>
        <Image src={cup} alt="Imagen" width={200} />
        <h2 className="text-3xl text-center">
          ...para todo mal,{" "}
          <span className="text-[#ff0000] font-bold">mezcal</span>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
