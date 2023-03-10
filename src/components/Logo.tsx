import { BsFillPlayBtnFill } from "react-icons/bs";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex justify-center items-center text-red-600 text-4xl rounded-full relative">
        <div className="bg-white w-8 h-5 absolute" />
        <BsFillPlayBtnFill className="z-10" />
      </div>
      <div className="text-xl font-bold">Devtube</div>
    </div>
  );
}
