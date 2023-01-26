export type AuthContextType = {
  user?: User | null;
  token?: string | null;
  expiresAt?: Date | null;
} | null;

export interface User {
  nombre: string;
}
