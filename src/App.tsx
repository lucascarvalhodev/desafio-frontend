import { AppRoutes } from "./AppRoutes";
import { Navbar } from "./components/Navbar";
import { GlobalProvider } from "./providers/GlobalProvider";

export function App() {
  return (
    <GlobalProvider>
      <div className="w-screen h-screen relative bg-neutral-900 text-white overflow-y-auto overflow-x-hidden">
        <Navbar />
        <AppRoutes />
      </div>
    </GlobalProvider>
  );
}
