import React, { useEffect, useState } from "react";
import { profileUser } from "../api/service";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

const Profile = () => {
  let token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  const profileInit = () => {
    profileUser(token).then((req, res) => {
      console.log(req.data);
      if (req.data.status !== "failed") {
        console.log(req.data);
        setName(req.data.userValidation.name);
        setEmail(req.data.userValidation.email);
        setMobile(req.data.userValidation.mobile);
      } else {
        navigate("/");
      }
    });
  };

  useEffect(() => {
    profileInit();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-32 w-5/6 sm:w-2/3 flex flex-col m-auto items-center">
        
        <h1 className="text-xl text-center">Name : {name}</h1>
        <h1 className="text-xl text-center">Email : {email}</h1>
        <h1 className="text-xl text-center">Mobile Number : {mobile}</h1>
      </div>
    </>
  );
};

export default Profile;
