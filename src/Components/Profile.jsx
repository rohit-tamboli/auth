import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Home from "./Home";
import { toast } from "react-toastify";
import "./Profile.css";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    college: "",
    course: "",
    mobile: "",
    event: "",
    branch: "",
  });

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User not found in database");
        }
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/mcq1";
  };

  return (
    <>
      <Home />

      <div className="profile-container">
        {userDetails ? (
          <>
            <h2 className="profile-heading">Welcome</h2>

            <form className="profile-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Workshop Registration</h3>

              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter your first name"
                  value={formData.fname}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>College Name</label>
                <input
                  type="text"
                  name="college"
                  placeholder="Enter your college name"
                  value={formData.college}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Course Name</label>
                <input
                  type="text"
                  name="course"
                  placeholder="Enter your course name"
                  value={formData.course}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Mobile No.</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Event Name</label>
                <select
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
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
              </div>

              <div className="form-group">
                <label>Branch / Year</label>
                <input
                  type="text"
                  name="branch"
                  placeholder="Enter your branch / year"
                  value={formData.branch}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </>
        ) : (
          <p className="loading-text">Loading...</p>
        )}
      </div>
    </>
  );
};

export default Profile;
