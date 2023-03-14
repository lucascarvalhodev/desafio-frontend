import { useLayoutEffect, useState } from "react";
import { InputSearch } from "./InputSearch";
import { Logo } from "./Logo";
import {
  BsSearch,
  BsArrowLeft,
  BsPersonFill,
  BsListColumnsReverse,
} from "react-icons/bs";
import { IconButton } from "./IconButton";
import { useAuthContext } from "../providers/AuthProvider";
import { getOAuthUrl, getRegisterUrl } from "../services/api";
import { createSearchParams, useNavigate } from "react-router-dom";
import { EAppRoutes } from "../AppRoutes";
import { addSearchHistory } from "../helpers/searchHistory";

export function Navbar() {
  const { auth } = useAuthContext();
  const natigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [slim, setSlim] = useState(true);

  useLayoutEffect(() => {
    resize();
    window.addEventListener("resize", resize);
  }, []);

  function resize() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 639) {
      setShowSearch(false);
      setSlim(true);
      return;
    }
    setSlim(false);
    setShowSearch(true);
  }

  function onSearch() {
    addSearchHistory(search);
    natigate({
      pathname: EAppRoutes.HOME,
      search: createSearchParams({ search }).toString(),
    });
  }

  function register() {
    window.location.href = getRegisterUrl();
  }

  function login() {
    window.location.replace(getOAuthUrl());
  }

  function goToHome() {
    setSearch("");
    natigate(EAppRoutes.HOME);
  }

  function goToMyChannel() {
    natigate(EAppRoutes.MY_CHANNEL);
  }

  function goToSearchHistory() {
    natigate(EAppRoutes.SEARCH_HISTORY);
  }

  const viewOptions = slim ? !showSearch : true;

  return (
    <div className="w-full h-16 px-4 flex justify-between items-center gap-5 sticky top-0 z-10 bg-neutral-900 border-transparent border-b-neutral-800 border-[1px]">
      {!viewOptions && (
        <IconButton onClick={() => setShowSearch(false)}>
          <BsArrowLeft />
        </IconButton>
      )}
      {viewOptions && (
        <div onClick={goToHome} className="cursor-pointer">
          <Logo />
        </div>
      )}
      {showSearch && (
        <InputSearch value={search} setValue={setSearch} onSearch={onSearch} />
      )}
      {viewOptions && (
        <div className="flex items-center gap-2">
          {auth ? (
            <>
              <IconButton
                className="sm:hidden"
                onClick={() => setShowSearch(true)}
              >
                <BsSearch />
              </IconButton>

              <IconButton onClick={goToSearchHistory}>
                <BsListColumnsReverse />
              </IconButton>
              <IconButton onClick={goToMyChannel}>
                <BsPersonFill />
              </IconButton>
            </>
          ) : (
            <>
              <div onClick={login} className="cursor-pointer font-bold">
                Login
              </div>
              <div>or</div>
              <div onClick={register} className="cursor-pointer font-bold">
                Register
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
