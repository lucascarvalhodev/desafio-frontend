import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVideo } from "../services/api";
import { useState } from "react";
import { IFrameYoutube } from "../components/IFrameYoutube";
import { DateTime } from "luxon";

function VideoDetails() {
  const { id } = useParams();
  const [video, setVideo] = useState<any>();

  useEffect(() => {
    getData();
  }, [id]);

  async function getData() {
    if (!id) return;

    const { data } = await getVideo(id);
    const video = data.items[0];
    setVideo(video);
  }

  const title = video?.snippet?.title;
  const description = video?.snippet?.description;
  const tags = video?.snippet?.tags?.map((tag: string) => `#${tag} `);
  const channel = video?.snippet?.channelTitle;
  const viewCount = video?.statistics?.viewCount;
  const publishedAt = DateTime.fromISO(video?.snippet?.publishedAt).toFormat(
    "dd/MM/yyyy"
  );

  return (
    <div className="container mx-auto py-4 px-4 max-w-5xl">
      <div className="flex flex-col items-center">
        {id && <IFrameYoutube videoId={id} />}
        <div>
          <div className="text-lg font-bold mt-3 mb-1">
            {title} - {channel}
          </div>
          <div className="text-sm font-medium mb-3">{`${viewCount} Visualizações | ${publishedAt}`}</div>
          <div className="whitespace-pre-wrap">{description}</div>
          <div className="text-sm text-blue-500 mt-3">{tags}</div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
