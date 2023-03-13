import { useLayoutEffect, useRef } from "react";

interface IFrameYoutubeProps {
  videoId: string;
}

export function IFrameYoutube({ videoId }: IFrameYoutubeProps) {
  const ref = useRef<HTMLIFrameElement>(null);

  useLayoutEffect(() => {
    resize();
    window.addEventListener("resize", resize);
  }, []);

  function resize() {
    if (ref.current?.clientWidth) {
      const height = (ref.current.clientWidth / 16) * 9;
      ref.current.height = height + "px";
    }
  }

  return (
    <iframe
      ref={ref}
      width="100%"
      src={`//www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
    />
  );
}
