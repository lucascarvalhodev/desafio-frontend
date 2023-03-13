import { VideoInterface } from "../interfaces/VideoInterface";
import { Skeleton } from "./Skeleton";

interface VideoBoxProps {
  video?: VideoInterface;
}

export function VideoBox({ video }: VideoBoxProps) {
  function goToChannel(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    //alert(video?.channel.id + " - " + video?.channel.title);
  }

  function goToVideo() {
    //alert(video?.id + " - " + video?.title);
  }

  return (
    <div className="w-full cursor-pointer relative" onClick={goToVideo}>
      <div>
        {video ? (
          <img src={video.thumbnail} alt={video.title} className="w-full" />
        ) : (
          <Skeleton className="h-36" />
        )}
      </div>
      <div className="py-3">
        <div>
          <div className="font-bold text-sm mb-1 w-full h-10 text-ellipsis overflow-hidden">
            {video ? (
              video.title
            ) : (
              <>
                <Skeleton className="h-4" />
                <Skeleton className="h-4" />
              </>
            )}
          </div>
          <div className="text-xs">
            {video ? video.channel?.title : <Skeleton />}
          </div>
          <div className="text-xs">
            {video ? `Publicado em: ${video.publishedAt}` : <Skeleton />}
          </div>
        </div>
      </div>
    </div>
  );
}
