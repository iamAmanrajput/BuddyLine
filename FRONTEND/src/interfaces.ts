export interface User {
  id: string;
  username: string;
}
export interface LoginProps {
  onLogin: (username: string) => void;
}
