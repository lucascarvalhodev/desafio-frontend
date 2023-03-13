import { Button } from "../components/Button";
import { BsExclamationTriangle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-24">
      <div className="text-9xl mb-3">
        <BsExclamationTriangle />
      </div>
      <div className="text-2xl">Algo deu errado...</div>
      <div className="mt-10">
        <Button onClick={() => navigate(-1)}>Tenta novamente</Button>
      </div>
    </div>
  );
}

export default Error;
