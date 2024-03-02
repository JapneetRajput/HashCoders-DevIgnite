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
        <div className="z-10 absolute flex flex-row items-center justify-center h-full w-full">
          <Loader />
        </div>
      )}
      <div className="flex mt-16 md:mt-12">
        {/* <img src={logo} alt="logo" className="inline w-10 h-10" /> */}
        <h1 className=" text-[#2E0052] text-3xl ml-1 flex flex-row items-center font-semibold">
          Memories
        </h1>
      </div>
      <form
        onSubmit={login}
        className="p-6 bg-white flex flex-col items-start border mt-16 md:mt-12 border-[#D9D9D9] border-3px w-5/6 sm:w-1/2 lg:w-1/3 rounded-xl"
      >
        <p className="text-2xl ml-2">Login</p>
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
          className="w-full mb-4 text-white hover:text-[#2E0052] hover:border-[#2E0052] hover:border bg-[#2E0052] hover:bg-white rounded-lg h-12 mt-8"
        >
          Continue
        </button>
        <h1 className="text-sm text-left mx-1">
          By continuing, you agree to Memories privacy notice and conditions of
          use.
        </h1>
      </form>
      <div className="mt-8 text-xs md:text-sm sm:w-1/2 lg:w-1/3 flex items-center w-full md:px-1 px-9">
        <hr className="border-t w-full border-gray-300 flex-grow" />
        <span className=" text-gray-500 w-full">New to Memories?</span>
        <hr className="border-t w-full border-gray-300 flex-grow" />
      </div>
      <button
        onClick={() => navigate("/register")}
        className="w-4/5 lg:w-1/3 sm:w-1/2 mb-4 text-[#2E0052] hover:text-white border-gray-700 border bg-white hover:bg-[#2E0052] rounded-lg h-12 mt-8"
      >
        Create your Memories account
      </button>
      <div className="absolute bottom-0 bg-[#2E0052] flex flex-col items-center w-full h-10 pt-2">
        <span className="text-white">Memories | All rights reserved</span>
      </div>
    </div>
  );
};

export default Login;
