import { useContext } from "react";
import { AuthContext } from "@/helpers/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Use Auth debe utilizarse dentro de un provider");
  }
  return context;
};
