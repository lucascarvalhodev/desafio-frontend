import { Navbar } from "./components/Navbar";
import { VideoBox } from "./components/VideoBox";

function App() {
  const videos = Array(20).fill("");

  return (
    <div className="w-screen h-screen bg-neutral-900 text-white overflow-y-auto overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto py-5 grid gap-x-8 gap-y-4 grid-cols-4">
        {videos.map((_, key) => {
          return <VideoBox key={key} />;
        })}
      </div>
    </div>
  );
}

export default App;
