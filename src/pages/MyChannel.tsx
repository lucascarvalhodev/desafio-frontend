import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EAppRoutes } from "../AppRoutes";
import { Button } from "../components/Button";
import { Skeleton } from "../components/Skeleton";
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
        {channel ? (
          <img src={thumbnail} alt={title} className="rounded-full w-36 h-36" />
        ) : (
          <Skeleton className="rounded-full w-36 h-36" />
        )}
      </div>
      <div className="text-lg font-bold mt-3 mb-1">
        {channel ? title : <Skeleton className="w-48 h-4" />}
      </div>
      <div className="mb-1 text-sm font-medium">
        {channel ? customUrl : <Skeleton className="w-48 h-4" />}
      </div>
      <div className="mb-3">
        {channel ? description : <Skeleton className="w-48 h-4" />}
      </div>
      <div className="py-2 px-4 flex text-sm font-bold">
        {channel ? (
          `${subscriberCount} inscritos | ${videoCount} vídeos | ${viewCount} visualizações`
        ) : (
          <Skeleton className="w-72 h-4 mb-0" />
        )}
      </div>
      <div className="mt-8">
        <Button onClick={logout}>Realizar logout</Button>
      </div>
    </div>
  );
}

export default MyChannel;
