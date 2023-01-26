import React, { createContext, ReactNode, useState } from "react";
import { AuthContextType } from "../types/auth";

interface Props {
  children?: ReactNode;
}
export const AuthContext = createContext<AuthContextType>({
  expiresAt: null,
  token: null,
  user: null,
});

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthContextType | null>({
    token: "1221321",
    expiresAt: new Date(),
    user: { nombre: "asds" },
  });

  const ingresarUsuario = (auth: AuthContextType) => setAuth(auth);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// export const AuthProvider: React.FC<React.ReactNode> = ({
//   children
// }): Props => {
//   return (
//     <AuthContext.Provider value={{ token: "" }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
export default AuthContext;
