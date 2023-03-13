import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EAppRoutes } from "../AppRoutes";
import { Button } from "../components/Button";
import { useAuthContext } from "../providers/AuthProvider";
import { getMyChannel } from "../services/api";

function MyChannel() {
  const { auth, setAuth } = useAuthContext();
  const [channel, setChannel] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate(EAppRoutes.HOME);
    getChannel();
  }, []);

  async function getChannel() {
    try {
      const { data } = await getMyChannel();
      const channel = data.items[0];
      setChannel(channel);
    } catch (e) {
      navigate(EAppRoutes.ERROR);
    }
  }

  function logout() {
    setAuth(undefined);
  }

  const title = channel?.snippet?.title;
  const customUrl = channel?.snippet?.customUrl;
  const description = channel?.snippet?.description;
  const thumbnail = channel?.snippet?.thumbnails?.medium?.url;
  const subscriberCount = channel?.statistics?.subscriberCount;
  const videoCount = channel?.statistics?.videoCount;
  const viewCount = channel?.statistics?.viewCount;

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4">
        <img src={thumbnail} alt={title} className="rounded-full w-36" />
      </div>
      <div className="text-lg font-bold mt-3 mb-1">{title}</div>
      <div className="mb-1 text-sm font-medium">{customUrl}</div>
      <div className="mb-3">{description}</div>
      <div className="py-2 px-4 border-2 border-neutral-700 flex text-sm font-bold mb-10">
        {`${subscriberCount} inscritos | ${videoCount} vídeos | ${viewCount} visualizações`}
      </div>
      <Button onClick={logout}>Realizar logout</Button>
    </div>
  );
}

export default MyChannel;
