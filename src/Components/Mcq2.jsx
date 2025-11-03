import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Home from "./Home";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import "./Mcq2.css";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("User logged in Successfully");
      window.location.href = "/result";

      localStorage.setItem("Mcq2Answers", JSON.stringify(answers));
      // navigate("/result");
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <Home />

      <div className="">
        {userDetails ? (
          <>
            <h3>Mcq- 2</h3>

            <div className="section-container">
              <div className="section-card">
                <h3 className="section-title text-center mb-4">
                  ✍️ Section 2 – Objective / Short Answer
                </h3>

                <div className="question-block">
                  <label>1. Write one skill you learned today.</label>
                  <textarea
                    name="q1"
                    rows="2"
                    placeholder="Your answer..."
                    value={answers.q1}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="question-block">
                  <label>
                    2. What was your favorite part of this workshop?
                  </label>
                  <textarea
                    name="q2"
                    rows="2"
                    placeholder="Your answer..."
                    value={answers.q2}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="question-block">
                  <label>
                    3. How will you use this knowledge in your career?
                  </label>
                  <textarea
                    name="q3"
                    rows="2"
                    placeholder="Your answer..."
                    value={answers.q3}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="question-block">
                  <label>4. Mention one new concept you learned.</label>
                  <textarea
                    name="q4"
                    rows="2"
                    placeholder="Your answer..."
                    value={answers.q4}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="question-block">
                  <label>5. Any suggestion for improvement?</label>
                  <textarea
                    name="q5"
                    rows="2"
                    placeholder="Your answer..."
                    value={answers.q5}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="submit-section">
                  <button className="submit-btn" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </>
  );
};

export default Profile;
