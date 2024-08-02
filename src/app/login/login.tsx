import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Register from "@/components/Register/Register";

const LoginRegister: React.FC = () => {
  return (
    <div className="text-white">
      <div className="my-6">
        <LoginForm />
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold text-center">
          ¿Aun no tienes cuenta?
        </h1>
      </div>
      <div className="my-6">
        <Register />
      </div>
    </div>
  );
};

export default LoginRegister;
