import React, { useEffect, useState } from "react";
// import logo from "../assets/logoMusicart.png";
import TextBox from "../components/TextBox";
import "../styles/login.css";
import Loader from "../components/Loader";
import { loginUser } from "../api/service";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/UserContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { setUserAuth } = React.useContext(AuthContext);
  const auth = localStorage.getItem("token");
  const login = async (event) => {
    event.preventDefault();
    // Activate the loader
    setLoader(true);
    // Create a new user
    if (email !== "" && password !== "") {
      setLoader(false);
      const user = {
        email: email,
        password: password,
      };
      setEmail("");
      setPassword("");
      await loginUser(user)
        .then((req, res) => {
          const { status, message } = req.data;
          if (status === "failed") {
            alert(message);
          } else {
            localStorage.setItem("token", req.data.token);
            setUserAuth(true);
            navigate("/profile");
          }
        })
        .catch((err) => console.log(err));
    } else {
      setLoader(false);
      alert("All fields are mandatory!");
    }
  };

  useEffect(() => {
    if (auth) {
      navigate("/profile");
    } else {
      setUserAuth(false);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      {loader && (
        <div className="absolute z-10 flex flex-row items-center justify-center w-full h-full">
          <Loader />
        </div>
      )}
      <div className="flex mt-16 md:mt-12">
        <h1 className=" text-[#313638] text-3xl ml-1 flex flex-row items-center font-semibold">
          EDORA
        </h1>
      </div>
      
      <form
        onSubmit={login}
        className="p-6 bg-white flex flex-col items-start border mt-16 md:mt-12 border-[#D9D9D9] border-3px w-5/6 sm:w-1/2 lg:w-1/3 rounded-xl"
      >
        <p className="ml-2 text-2xl">Login</p>
        <TextBox
          text="text-md text-black"
          width="w-full"
          height="h-12"
          hint="Email ID"
          backgroundColor="bg-white"
          position="left-2 md:left-3 top-2.5"
          border="border-gray border-2"
          span="px-1"
          input="px-3 md:px-4"
          div="mt-8"
          setState={setEmail}
          value={email}
          type="email"
        />
        <TextBox
          text="text-md text-black"
          width="w-full"
          height="h-12"
          hint="Password"
          backgroundColor="bg-white"
          position="left-2 md:left-3 top-2.5"
          border="border-gray border-2"
          span="px-1"
          input="px-3 md:px-4"
          div="mt-8"
          type="password"
          setState={setPassword}
          value={password}
        />
        <button
          type="submit"
          className="shadow-none w-full mb-4 hover:text-[#313638] text-white border-[#232323] hover:bg-white bg-[#313638] border hover:border-[#313638]  rounded-lg h-10 mt-8"
        >
          Continue
        </button>
        <h1 className="mx-1 text-xs text-left">
          By continuing, you agree to Memories privacy notice and conditions of
          use.
        </h1>
      </form>
      <div className="flex items-center w-full mt-8 text-xs md:text-sm sm:w-1/2 lg:w-1/3 md:px-1 px-9">
        <hr className="flex-grow w-full border-t border-gray-300" />
        <span className="w-full text-gray-500 ">New to Edora?</span>
        <hr className="flex-grow w-full border-t border-gray-300" />
      </div>
      <button
        onClick={() => navigate("/register")}
        className="shadow-none w-3/4 md:w-1/3 mb-4 hover:text-[#313638] text-white border-[#232323] hover:bg-white bg-[#313638] border hover:border-[#313638]  rounded-lg h-10 mt-8"
      >
        Create your Edora account
      </button>
      <div className="bottom-0 bg-[#313638] flex flex-col items-center w-full h-10 pt-2">
        <span className="text-white">Edora | All rights reserved</span>
      </div>
    </div>
  );
};

export default Login;
