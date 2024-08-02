/* eslint-disable @next/next/no-img-element */
import ButtonProducts from "@/components/ButtonProducts/ButtonProducts";
import Link from "next/link";
import { PATHROUTES } from "@/helpers/PATHROUTES";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="flex flex-col items-center justify-center max-w-6xl px-10 mx-auto lg:flex-row">
        <img
          src="https://i.ibb.co/0KngDvD/Apple-i-Phone-15-Pro-lineup-hero-230912-Full-Bleed-Image-jpg-large-removebg-preview.png"
          alt="homeImage"
        />
        <div className="mt-4 space-y-4 p-x-4">
          <h2 className="text-secundary">Enjoy Tech</h2>
          <h1 className="text-3xl">Skull Market</h1>
          <p className="font-sans ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            repellendus libero cumque quo veniam quasi qui natus tempore sed,
            laboriosam quisquam tenetur modi iste veritatis voluptatibus eum
            accusamus? Sequi, ipsum!
          </p>
          <ButtonProducts title={"Productos"} color="secundary" />
        </div>
      </div>
      {/* MIDDLE SECTION */}
      <div className="flex items-center justify-center py-8 bg-black md:bg-primary md:py-12">
        <div className="flex flex-col max-w-6xl space-x-4 md:space-x-10 items-center space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center justify-center w-4/5 px-4 py-6 ml-2 space-y-2 rounded-lg bg-primary md:bg-black md:w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-12 hover:text-secundary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
              />
            </svg>

            <h1>Networking</h1>
            <p className="font-sans text-sm text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, quis. Consequatur inventore dolores.
            </p>
            <Link href={PATHROUTES.ABOUT}>
              <h1 className="text-secundary ">Conocenos...</h1>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center w-4/5 px-4 py-6 space-y-2 rounded-lg bg-secundary md:w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-12 hover:text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>

            <h1>Desktop</h1>
            <p className="font-sans text-sm text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, quis. Consequatur inventore dolores.
            </p>
            <Link href={PATHROUTES.PRODUCTS}>
              <h1 className="">Productos...</h1>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center w-4/5 px-4 py-6 space-y-2 rounded-lg bg-primary md:bg-black md:w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-12 hover:text-secundary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <h1>Postventa</h1>
            <p className="font-sans text-sm text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, quis. Consequatur inventore dolores.
            </p>
            <Link href={PATHROUTES.CONTACT}>
              <h1 className="text-secundary">Contactanos...</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-2xl">
        <h1 className="px-2 mb-3 text-center md:mb-1">
          Los mejores smart-Gadgets en un solo lugar
        </h1>
      </div>
    </div>
  );
};

export default Home;
