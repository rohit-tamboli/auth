import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
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
            <h3>Mcq- 2</h3>
            <div className="section-container">
              <div className="section-card">
                <h3 className="section-title text-center mb-4">
                  ✍️ Section 2 – Objective / Short Answer
                </h3>

                {["q1", "q2", "q3", "q4", "q5"].map((key, i) => (
                  <div className="question-block" key={key}>
                    <label>
                      {i + 1}.{" "}
                      {
                        [
                          "Write one skill you learned today.",
                          "What was your favorite part of this workshop?",
                          "How will you use this knowledge in your career?",
                          "Mention one new concept you learned.",
                          "Any suggestion for improvement?",
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

export default Profile;
