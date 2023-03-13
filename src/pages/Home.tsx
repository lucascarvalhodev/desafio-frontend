import { VideoBox } from "../components/VideoBox";
import { useEffect, useState } from "react";
import { listSearch } from "../services/api";
import { VideoInterface } from "../interfaces/VideoInterface";
import { Button } from "../components/Button";

function Home() {
  const [videos, setVideos] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState<string>();
  const [prevPageToken, setPrevPageToken] = useState<string>();

  useEffect(() => {
    search();
  }, []);

  async function search(pageToken?: string) {
    setLoading(true);
    const search = await listSearch("java script", pageToken);

    setPrevPageToken(search.data?.prevPageToken);
    setNextPageToken(search.data?.nextPageToken);

    const videos: VideoInterface[] = search.data["items"].map((el: any) => {
      return {
        id: el.videoId,
        title: el.snippet.title,
        thumbnail: el.snippet.thumbnails.medium.url,
        viewCount: "el.statistics.viewCount",
        publishedAt: el.snippet.publishedAt,
        channel: {
          id: el.snippet.channelId,
          title: el.snippet.channelTitle,
        },
      };
    });

    setVideos(videos);
    setLoading(false);
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
