import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Home from "./Home";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Mcq2.css";

const Mcq2 = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  // 🔹 Handle input
  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  // 🔹 Fetch logged-in user details
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails({ uid: user.uid, ...docSnap.data() });
        } else {
          console.log("User document not found!");
        }
      } else {
        console.log("User not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // 🔹 Handle logout
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Use auth.currentUser directly
      const user = auth.currentUser;
      if (!user) {
        toast.error("User not logged in!");
        return;
      }

      const userRef = doc(db, "Users", user.uid);

      // ✅ Save data
      await updateDoc(userRef, {
        mcq2Answers: answers,
        updatedAt: new Date(),
      });

      localStorage.setItem("Mcq2Answers", JSON.stringify(answers));
      toast.success("Answers saved successfully!");

      navigate("/result");
    } catch (error) {
      console.error("Error saving answers:", error);
      toast.error("Error saving data. Try again.");
    }
  };

  return (
    <>
      <Home />
      <div>
        {userDetails ? (
          <>
            <div className="section-container">
              <div className="section-card">
                <h3 className="section-title text-center mb-4">
                  🎯 Section A: Multiple Choice Questions (MCQs)
                </h3>

                {["q1", "q2", "q3", "q4", "q5"].map((key, i) => (
                  <div className="question-block" key={key}>
                    <label>
                      {i + 1}.{" "}
                      {
                        [
                          "What are the 3 most productive things you do each day to grow your skills?",
                          "Suppose you’ve just completed your graduation today — where do you envision yourself in the next 5 years? What milestones do you aim to achieve in your professional journey ahead? ",
                          "Why do you believe you can be a winner in this challenge? What qualities make you stand out from others?",
                          "What does “Career Readiness” mean to you personally? How are you preparing yourself for real-world opportunities?",
                          "If selected for Phase 2, how will you utilize the opportunity? Share your plan to make the most of mentorship, rewards, or internships.",
                        ][i]
                      }
                    </label>
                    <textarea
                      name={key}
                      rows="2"
                      placeholder="Your answer..."
                      value={answers[key]}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                ))}

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

export default Mcq2;
