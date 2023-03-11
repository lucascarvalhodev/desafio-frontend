import { BrowserRouter } from "react-router-dom";

interface GlobalProviderProps {
  children?: React.ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <>
      <BrowserRouter>{children}</BrowserRouter>
    </>
  );
}
