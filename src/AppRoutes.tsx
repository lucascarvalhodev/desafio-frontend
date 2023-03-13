import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Callback from "./pages/Callback";
import MyChannel from "./pages/MyChannel";

export enum EAppRoutes {
  HOME = "/",
  CALLBACK = "/auth/callback",
  MY_CHANNEL = "/my-channel",
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path={EAppRoutes.HOME} element={<Home />} />
      <Route path={EAppRoutes.MY_CHANNEL} element={<MyChannel />} />
      <Route path={EAppRoutes.CALLBACK} element={<Callback />} />
    </Routes>
  );
}
