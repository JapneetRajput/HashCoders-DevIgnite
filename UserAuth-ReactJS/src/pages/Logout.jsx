import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const auth = localStorage.removeItem("token");
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, []);
  return <></>;
};

export default Logout;
