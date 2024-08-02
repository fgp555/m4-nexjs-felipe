/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div className="text-white">
      {/* TOP DIV */}
      <div className="flex flex-col items-center max-w-6xl mx-auto lg:flex-row">
        <img src="https://i.ibb.co/wptvq1W/gadgets.png" alt="gadgets" />
        <div className="flex flex-col items-center justify-center mx-auto space-y-9">
          <h1 className="text-3xl font-bold text-center">
            ¿Que es SkullMarket gadgets store?{" "}
          </h1>
          <h1 className="text-xl font-bold text-secundary">
            Conoce un poco de nosotros
          </h1>
        </div>
      </div>
      {/* MIDDLE DIV */}
      <div className=" bg-primary">
        <div className="flex flex-col max-w-6xl mx-auto mt-6 lg:h-64 lg:flex-row">
          <div className="flex flex-col justify-center p-6 space-y-4 lg:p-14">
            <h1 className="text-3xl font-bold text-center text-secundary">
              Comprometidos con la excelencia
            </h1>
            <p className="font-sans">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut illum
              officiis modi vel? Molestiae corporis, non rerum, sint itaque
              ipsum commodi esse velit temporibus nobis nesciunt consectetur eos
              eligendi doloremque. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ut illum officiis modi vel? Molestiae corporis,
              non rerum, sint itaque ipsum commodi esse velit temporibus nobis
              nesciunt consectetur eos eligendi doloremque.
            </p>
          </div>
          <img
            className=""
            src="https://i.ibb.co/8BN44ZS/geeks-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col justify-center max-w-6xl mx-auto my-4">
        <h1 className="text-2xl font-semibold text-center text-secundary">
          Nuestra empresa en numeros
        </h1>
        <div className="flex flex-col justify-center py-4  space-y-8 md:flex-row md:py-7">
          <div className="flex flex-col items-center justify-center mr-4 border-black md:border mt-7 md:px-4 border-r-secundary">
            <p>100%</p>
            <p className="text-center">Clientes satisfechos</p>
          </div>

          <div className="flex flex-col items-center justify-center border-black md:border md:px-4 border-r-secundary">
            <p>5,000</p>
            <p className="text-center">Gadgets al mes en consigna</p>
          </div>

          <div className="flex flex-col items-center justify-center border-black md:border md:px-4 border-r-secundary">
            <p>30 Minutos</p>
            <p className="text-center">Tramite de consigna</p>
          </div>

          <div className="flex flex-col px-3 items-center justify-center">
            <p>55,000</p>
            <p className="text-center">Gadgets vendidos el año anterior</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
