import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";

interface GlobalProviderProps {
  children?: React.ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>{children}</AuthProvider>
      </BrowserRouter>
    </>
  );
}
