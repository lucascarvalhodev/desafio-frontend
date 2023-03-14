import { VideoBox } from "../components/VideoBox";
import { useEffect, useState } from "react";
import { getSearch } from "../services/api";
import { VideoInterface } from "../interfaces/VideoInterface";
import { Button } from "../components/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { EAppRoutes } from "../AppRoutes";

function Home() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [videos, setVideos] = useState<any[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    search();
  }, [searchParams.get("search")]);

  async function search(pageToken?: string) {
    try {
      setLoading(true);

      let search = searchParams.get("search") ?? "";
      const { data } = await getSearch(search, pageToken);

      setSearchParams({
        search,
        prevPageToken: data?.prevPageToken,
        nextPageToken: data?.nextPageToken,
      });

      const videos: VideoInterface[] = data?.items.map((el: any) => {
        return {
          id: el.id.videoId,
          title: el.snippet.title,
          thumbnail: el.snippet.thumbnails.medium.url,
          publishedAt: el.snippet.publishedAt,
          channel: {
            id: el.snippet.channelId,
            title: el.snippet.channelTitle,
          },
        };
      });

      setVideos(videos);
      setLoading(false);
    } catch (e) {
      navigate(EAppRoutes.ERROR);
    }
  }

  let prevPageToken: any = searchParams.get("prevPageToken");
  let nextPageToken: any = searchParams.get("nextPageToken");

  if (prevPageToken === "undefined" || prevPageToken === null) {
    prevPageToken = undefined;
  }

  if (nextPageToken === "undefined" || nextPageToken === null) {
    nextPageToken = undefined;
  }

  const videosFake = Array(20).fill(undefined);
  const data = loading ? videosFake : videos;

  return (
    <div className="container mx-auto py-4 px-4">
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-8 gap-y-4">
        {data?.map((video, key) => {
          return <VideoBox key={key} video={video} />;
        })}
      </div>
      <div className="flex justify-center gap-3 my-1">
        <Button disabled={!prevPageToken} onClick={() => search(prevPageToken)}>
          Página Anterior
        </Button>
        <Button disabled={!nextPageToken} onClick={() => search(nextPageToken)}>
          Próximo página
        </Button>
      </div>
    </div>
  );
}

export default Home;
