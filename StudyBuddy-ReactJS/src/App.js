import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

// PAGES
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import { useContext } from "react";
import { AuthContext } from "./context/UserContext";
import Error404 from "./pages/Error404";
import LectureNotes from "./pages/LectureNotes";

const Privateroute = () => {
  const auth = localStorage.getItem("token");
  const { userAuth } = useContext(AuthContext);
  return <>{userAuth || auth ? <Outlet /> : <Navigate replace to={"/"} />}</>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Privateroute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/lecture-notes" element={<LectureNotes />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
