import { useLayoutEffect, useState } from "react";
import { InputSearch } from "./InputSearch";
import { Logo } from "./Logo";
import { BsCameraVideo, BsBell, BsSearch, BsArrowLeft } from "react-icons/bs";
import { IconButton } from "./IconButton";

export function Navbar() {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [slim, setSlim] = useState(true);

  useLayoutEffect(() => {
    window.addEventListener("resize", function () {
      var windowWidth = window.innerWidth;

      if (windowWidth <= 639) {
        setShowSearch(false);
        setSlim(true);
        return;
      }

      setSlim(false);
      setShowSearch(true);
    });
  }, []);

  function onSearch() {
    alert("onSearch: " + search);
  }

  const viewOptions = slim ? !showSearch : true;

  return (
    <div className="w-full h-14 px-4 flex justify-between items-center gap-5 sticky top-0 z-10 bg-neutral-900">
      {!viewOptions && (
        <IconButton onClick={() => setShowSearch(false)}>
          <BsArrowLeft />
        </IconButton>
      )}
      {viewOptions && <Logo />}
      {showSearch && (
        <InputSearch value={search} setValue={setSearch} onSearch={onSearch} />
      )}
      {viewOptions && (
        <div className="flex items-center gap-2">
          <IconButton className="sm:hidden" onClick={() => setShowSearch(true)}>
            <BsSearch />
          </IconButton>
          <IconButton>
            <BsCameraVideo />
          </IconButton>
          <IconButton>
            <BsBell />
          </IconButton>
        </div>
      )}
    </div>
  );
}
