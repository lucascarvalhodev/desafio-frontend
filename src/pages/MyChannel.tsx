import { useEffect } from "react";

function MyChannel() {
  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {}

  return <></>;
}

export default MyChannel;
