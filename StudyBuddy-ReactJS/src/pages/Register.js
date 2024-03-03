import React, { useState } from "react";
import logo from "../assets/logoMusicart.png";
import TextBox from "../components/TextBox";
import "../styles/login.css";
import Loader from "../components/Loader";
import { registerUser } from "../api/service";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false); // State to track quiz modal

  const navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();
    setLoader(true);

    if (name !== "" && mobileNumber !== "" && email !== "" && password !== "") {
      if (password !== confirmPassword) {
        setLoader(false);
        alert("Passwords do not match");
      } else {
        setLoader(false);
        const user = {
          name: name,
          mobile: Number(mobileNumber),
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        };
        setName("");
        setEmail("");
        setMobileNumber("");
        setPassword("");
        setConfirmPassword("");
        registerUser(user)
          .then((req, res) => {
            const { status, message } = req.data;
            if (status === "failed") {
              alert(message);
            } else {
              setQuizOpen(true); // Open the quiz modal after successful registration
            }
          })
          .catch((error) => {
            alert("Error in creating user " + error.message);
          });
      }
    } else {
      setLoader(false);
      alert("All fields are mandatory!");
    }
  };

  return (
    <div className="flex flex-col items-center">
      {loader && (
        <div className="absolute z-10 flex flex-row items-center justify-center w-full h-full">
          <Loader />
        </div>
      )}
      <div className="flex mt-12 sm:mt-6">
        <h1 className=" text-[#2E0052] text-3xl ml-1 flex flex-row items-center font-semibold">
          EDORA
        </h1>
      </div>
      <form
        onSubmit={register}
        className="px-6 py-6 bg-white flex flex-col items-start border mt-12 sm:mt-6 border-[#D9D9D9] border-3px w-5/6 sm:w-1/3 rounded-xl"
      >
        <p className="ml-2 text-2xl">Register</p>
        <TextBox
          text="text-md text-black"
          width="w-full"
          height="h-12"
          hint="Name"
          backgroundColor="bg-white"
          position="left-2 sm:left-3 top-2.5"
          border="border-gray border-2"
          span="px-1"
          input="px-3 sm:px-4"
          div="mt-8"
          type="text"
          setState={setName}
          value={name}
        />
        <TextBox
          text="text-md text-black"
          width="w-full"
          height="h-12"
          hint="Mobile Number"
          backgroundColor="bg-white"
          position="left-2 sm:left-3 top-2.5"
          border="border-gray border-2"
          span="px-1"
          input="px-3 sm:px-4"
          div="mt-6"
          type="text"
          setState={setMobileNumber}
          value={mobileNumber}
        />
        <TextBox
          text="text-md text-black"
          width="w-full"
          height="h-12"
          hint="Email ID"
          backgroundColor="bg-white"
          position="left-2 sm:left-3 top-2.5"
          border="border-gray border-2"
          span="px-1"
          input="px-3 sm:px-4"
          div="mt-6"
          type="email"
          setState={setEmail}
          value={email}
        />
        <TextBox
          text="text-md text-black"
          width="w-full"
          height="h-12"
          hint="Password"
          backgroundColor="bg-white"
          position="left-2 sm:left-3 top-2.5"
          border="border-gray border-2"
          span="px-1"
          input="px-3 sm:px-4"
          div="mt-6"
          type="password"
          setState={setPassword}
          value={password}
        />
        <TextBox
          text="text-md text-black"
          width="w-full"
          height="h-12"
          hint="Confirm Password"
          backgroundColor="bg-white"
          position="left-2 sm:left-3 top-2.5"
          border="border-gray border-2"
          span="px-1"
          input="px-3 sm:px-4"
          div="mt-6"
          type="password"
          setState={setConfirmPassword}
          value={confirmPassword}
        />
        <button
          type="submit"
          className="shadow-none w-full mb-4 hover:text-[#313638] text-white border-[#232323] hover:bg-white bg-[#313638] border hover:border-[#313638]  rounded-lg h-10 mt-8"
        >
          Continue
        </button>
        <h1 className="mx-1 text-xs text-left">
          By continuing, you agree to Edora's privacy notice and conditions of
          use.
        </h1>
      </form>
      <p className="my-5">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/")}
          className="font-semibold underline cursor-pointer"
        >
          Sign in
        </span>
      </p>
      <div className="bottom-0  bg-[#313638] flex flex-col items-center w-full h-10 pt-2">
        <span className="text-white">Edora | All rights reserved</span>
      </div>
      {/* Modal for Quiz */}
      {quizOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="p-6 bg-white rounded-lg">
            <button
              className="absolute text-gray-600 top-2 right-2 hover:text-gray-800"
              onClick={() => setQuizOpen(false)} // Close the quiz modal
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
