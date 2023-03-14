import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";
import { EAppRoutes } from "../AppRoutes";
import { getRouteWithParams } from "../helpers/getRouteWithParams";
import { VideoInterface } from "../interfaces/VideoInterface";
import { Skeleton } from "./Skeleton";

interface VideoBoxProps {
  video?: VideoInterface;
}

export function VideoBox({ video }: VideoBoxProps) {
  const natigate = useNavigate();

  const id = video?.id;
  const title = video?.title;
  const thumbnail = video?.thumbnail;
  const channel = video?.channel?.title;
  const publishedAt = DateTime.fromISO(video?.publishedAt ?? "").toFormat(
    "dd/MM/yyyy"
  );

  function goToVideo() {
    natigate(getRouteWithParams(EAppRoutes.VIDEO_DETAILS, { id }));
  }

  return (
    <div className="w-full cursor-pointer relative" onClick={goToVideo}>
      <div>
        {video ? (
          <img src={thumbnail} alt={title} className="w-full" />
        ) : (
          <Skeleton className="h-36" />
        )}
      </div>
      <div className="py-3">
        <div>
          <div className="font-bold text-sm mb-1 w-full text-ellipsis overflow-hidden">
            {video ? (
              title
            ) : (
              <>
                <Skeleton className="h-4" />
                <Skeleton className="h-4" />
              </>
            )}
          </div>
          <div className="text-xs">{video ? channel : <Skeleton />}</div>
          <div className="text-xs">
            {video ? `Publicado em: ${publishedAt}` : <Skeleton />}
          </div>
        </div>
      </div>
    </div>
  );
}
