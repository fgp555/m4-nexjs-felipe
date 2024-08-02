import { createContext } from "react";
import { AuthContextProps } from "@/interfaces/interfaces";

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
