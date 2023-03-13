import { useEffect } from "react";
import { getVideo, listSearch } from "../services/api";

function MyChannel() {
  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {}

  return <></>;
}

export default MyChannel;
