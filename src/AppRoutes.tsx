import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import VideoDetails from "./pages/VideoDetails";
import MyChannel from "./pages/MyChannel";
import Error from "./pages/Error";
import Callback from "./pages/Callback";
import { SearchHistory } from "./pages/SearchHistory";

export enum EAppRoutes {
  HOME = "/",
  VIDEO_DETAILS = "/video-details/:id",
  MY_CHANNEL = "/my-channel",
  ERROR = "/error",
  CALLBACK = "/auth/callback",
  SEARCH_HISTORY = "/search-history",
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path={EAppRoutes.HOME} element={<Home />} />
      <Route path={EAppRoutes.VIDEO_DETAILS} element={<VideoDetails />} />
      <Route path={EAppRoutes.MY_CHANNEL} element={<MyChannel />} />
      <Route path={EAppRoutes.ERROR} element={<Error />} />
      <Route path={EAppRoutes.CALLBACK} element={<Callback />} />
      <Route path={EAppRoutes.SEARCH_HISTORY} element={<SearchHistory />} />
    </Routes>
  );
}
