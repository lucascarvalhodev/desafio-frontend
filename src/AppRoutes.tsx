import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Callback from "./pages/Callback";
import MyChannel from "./pages/MyChannel";
import VideoDetails from "./pages/VideoDetails";

export enum EAppRoutes {
  HOME = "/",
  VIDEO_DETAILS = "/video-details/:id",
  MY_CHANNEL = "/my-channel",
  CALLBACK = "/auth/callback",
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path={EAppRoutes.HOME} element={<Home />} />
      <Route path={EAppRoutes.VIDEO_DETAILS} element={<VideoDetails />} />
      <Route path={EAppRoutes.MY_CHANNEL} element={<MyChannel />} />
      <Route path={EAppRoutes.CALLBACK} element={<Callback />} />
    </Routes>
  );
}
