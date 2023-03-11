import { VideoBox } from "../components/VideoBox";

function Home() {
  const videos = Array(30).fill("");

  return (
    <div className="container mx-auto py-4 px-4 2xl:px-0 grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-8 gap-y-4">
      {videos.map((_, key) => {
        return <VideoBox key={key} />;
      })}
    </div>
  );
}

export default Home;
