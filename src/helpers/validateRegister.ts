import { Errors, User } from "@/interfaces/interfaces";

export const validateRegister = (input: User) => {
  const errors: Errors = {};

  //name -->
  if (!input.name) {
    errors.name = "El nombre es requerido";
  }

  //email -->

  if (!input.email) {
    errors.email = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "El email es inválido";
  }

  // address -->

  if (!input.address) {
    errors.address = "La direccion es requerida";
  } else if (input.address.length <= 10) {
    errors.address = "La direccion es muy corta";
  }

  // phone -->

  if (!input.phone) {
    errors.phone = "El telefono es requerido";
  } else if (input.phone.length !== 10) {
    errors.phone = "El telefono debe ser de 10 digitos";
  }

  // password -->

  if (!input.password) {
    errors.password = "Debes tener un password";
  }

  return errors;
};
