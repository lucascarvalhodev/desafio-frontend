import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EAppRoutes } from "../AppRoutes";
import { parseHashToObject } from "../helpers/parseHashToObject";
import { useAuthContext } from "../providers/AuthProvider";

function Callback() {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(parseHashToObject(window.location.hash));

    setTimeout(() => {
      navigate(EAppRoutes.HOME);
    }, 100);
  }, []);

  return null;
}

export default Callback;
