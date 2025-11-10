import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "./styles.css";
import "./Register.css";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [mobile, setMobile] = useState("");
  const [qualification, setQualification] = useState("");
  const [whatsAppNo, setWhatsAppNo] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [location, setLocation] = useState("");
  const [referralCode, setReferralCode] = useState("");

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
          qualification: qualification,
          collegeName: collegeName,
          referralSource: referralSource,
          whatsAppNo: whatsAppNo,
          location: location,
          referralCode: referralCode,
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
          <h3 className="gradient-text fw-bold ">Registration</h3>

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
            <label>Email ID</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="mb-3">
            <label>WhatsApp No.</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter whatsapp no."
              onChange={(e) => setWhatsAppNo(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Current Qualification</label>
            <select
              name="qualification"
              onChange={(e) => setQualification(e.target.value)}
              required
            >
              <option value="" disabled selected>
                Select Qualification
              </option>
              <option value="12th / Diploma">12th / Diploma</option>
              <option value="B.A">B.A</option>
              <option value="B.Com">B.Com</option>
              <option value="B.Sc">B.Sc</option>
              <option value="BBA">BBA</option>
              <option value="BCA">BCA</option>
              <option value="B.Tech / BE">B.Tech / BE</option>
              <option value="M.A">M.A</option>
              <option value="M.Com">M.Com</option>
              <option value="M.Sc">M.Sc</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="M.Tech">M.Tech</option>
              <option value="Ph.D / Research Scholar">
                Ph.D / Research Scholar
              </option>
              <option value="Other">Other (Specify)</option>
            </select>
          </div>

          <div className="mb-3">
            <label>College / University Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter college / university name"
              onChange={(e) => setCollegeName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Current City / Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter current city / location"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
                  

          <div className="form-group">
            <label>How did you hear about this quiz?</label>
            <select
              name="referralSource"
              onChange={(e) => setReferralSource(e.target.value)}
              required
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Friend / Referral">Friend / Referral</option>
              <option value="College / Faculty">College / Faculty</option>
              <option value="Other">Other</option>
            </select>
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
          <div className="mb-3">
            <label>Referral Code/Name Entry (If Any)</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter referral code / name entry"
              onChange={(e) => setReferralCode(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="submit-btn">
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
