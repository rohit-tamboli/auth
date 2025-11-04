import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "./styles.css";
import Home from "./Home";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [mobile, setMobile] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [courseName, setcourseName] = useState("");
  const [branch, setBranch] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullName: fname,
          mobile: mobile,
          collegeName: collegeName,
          courseName: courseName,
          branch: branch,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      window.location.href = "/mcq1";
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <div className="auth-wrapper">
        <form onSubmit={handleRegister} className=" auth-inner">
          <h3>Registration</h3>

          <div className="mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="full name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>College Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter college name"
              onChange={(e) => setCollegeName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Course Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter course name"
              onChange={(e) => setcourseName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Mobile No.</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter mobile no."
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          {/* <div className="form-group">
            <label>Event Name</label>
            <select
              name="event"

              // onChange={}
            >
              <option value="" disabled>
                Select Event / Workshop
              </option>
              <option value="Web Development Workshop">
                Web Development Workshop
              </option>
              <option value="AI & Machine Learning Seminar">
                AI & Machine Learning Seminar
              </option>
              <option value="Cyber Security Workshop">
                Cyber Security Workshop
              </option>
              <option value="App Development Bootcamp">
                App Development Bootcamp
              </option>
              <option value="Data Science Workshop">
                Data Science Workshop
              </option>
              <option value="Other">Other</option>
            </select>
          </div> */}

          <div className="mb-3">
            <label>Branch / Year</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter branch / year"
              onChange={(e) => setBranch(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right">
            Already registered <a href="/login">Login</a>
          </p> */}
        </form>
      </div>
    </>
  );
};

export default Register;
