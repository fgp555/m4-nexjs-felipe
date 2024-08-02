const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col p-8 space-y-12 rounded-md md:px-12 md:w-1/2 mb-7 py-14 bg-primary">
      <h1 className="text-2xl font-semibold text-center text-secundary">
        ¿Dudas?, ¡Cuentanos!
      </h1>
      <form className="flex flex-col space-y-4">
        <input
          className="p-2 text-white bg-black rounded-md"
          type="text"
          placeholder="Tu nombre"
        />
        <input
          className="p-2 text-white bg-black rounded-md"
          type="email"
          placeholder="Tu email"
        />
        <input
          className="h-20 p-2 text-white bg-black rounded-md "
          type="textarea"
          placeholder="Dejanos tu mensaje"
        />
        <button className="py-2 text-white rounded-md bg-secundary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
