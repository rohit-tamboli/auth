import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Components/Login";
import Register from "./Components/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";
import Form from "./Components/Form";
import { useEffect, useState } from "react";
import { auth } from "./Components/firebase";
import Profile from "./Components/Profile";
import InputBox from "./Components/InputBox";
import Mcq1 from "./Components/Mcq1";
import Mcq2 from "./Components/Mcq2";
import Result from "./Components/Result";
import Hometext from "./Components/Hometext";
import Homepage from "./Components/Homepage";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div className="App">
        <div className="">
          <div className="">
            <Routes>
              <Route path="/home" element={<Home />} />

              <Route path="/login" element={<Login />} />
              <Route
                path="/login"
                element={user ? <Navigate to="/form" /> : <Login />}
              />

              <Route path="/register" element={<Register />} />
              <Route path="/form" element={<Form />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/inputbox" element={<InputBox />} />
              <Route path="/mcq1" element={<Mcq1 />} />
              <Route path="/mcq2" element={<Mcq2 />} />
              <Route path="/result" element={<Result />} />
              <Route path="/homepage" element={<Hometext />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
