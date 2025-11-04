import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore"; // ✅ updateDoc for saving answers
import Home from "./Home";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Mcq1.css";

const Mcq1 = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

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
      } else {
        console.log("No user logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSelect = (questionId, optionValue) => {
    setAnswers({ ...answers, [questionId]: optionValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please log in first", { position: "bottom-center" });
      return;
    }

    try {
      const docRef = doc(db, "Users", user.uid);

      // ✅ Save MCQ answers inside user's Firestore document
      await updateDoc(docRef, {
        mcq1Answers: answers, // Save all answers as an object
        mcq1Completed: true, // Optional flag to check progress
        timestamp: new Date(), // Save time
      });

      toast.success("Quiz submitted successfully!", { position: "top-center" });

      // Redirect to next quiz page
      navigate("/mcq2");
    } catch (error) {
      console.error("Error saving answers:", error);
      toast.error("Failed to submit quiz. Try again.", {
        position: "bottom-center",
      });
    }
  };

  const questions = [
    {
      id: 1,
      text: "Which of the following best defines “Workshop”?",
      options: [
        { value: "A", text: "Group learning session" },
        { value: "B", text: "Festival event" },
        { value: "C", text: "Sports competition" },
        { value: "D", text: "None of these" },
      ],
    },
    {
      id: 2,
      text: "What is the main purpose of attending a workshop?",
      options: [
        { value: "A", text: "Networking" },
        { value: "B", text: "Practical Learning" },
        { value: "C", text: "Certification only" },
        { value: "D", text: "None" },
      ],
    },
    {
      id: 3,
      text: "Which platform is best for professional networking?",
      options: [
        { value: "A", text: "Instagram" },
        { value: "B", text: "YouTube" },
        { value: "C", text: "LinkedIn" },
        { value: "D", text: "Facebook" },
      ],
    },
    {
      id: 4,
      text: "What does “BFSI” stand for?",
      options: [
        { value: "A", text: "Banking, Finance, and Insurance" },
        { value: "B", text: "Banking, Financial Services & Insurance" },
        { value: "C", text: "Business, Finance, and Investments" },
        { value: "D", text: "None" },
      ],
    },
    {
      id: 5,
      text: "upDate Education mainly focuses on:",
      options: [
        { value: "A", text: "Gaming" },
        { value: "B", text: "Online Courses & HR" },
        { value: "C", text: "Travel" },
        { value: "D", text: "Entertainment" },
      ],
    },
  ];

  return (
    <>
      <Home />

      <div className="question-container">
        {userDetails ? (
          <div className="question-card">
            <h4 className="quiz-title text-center mb-4">
              🧠 Workshop Quiz
              <h3>MCQ - 1</h3>
            </h4>

            {questions.map((q) => (
              <div key={q.id} className="question-block">
                <h5 className="question-title">
                  {q.id}. {q.text}
                </h5>

                <div className="options-grid">
                  {q.options.map((opt) => (
                    <div
                      key={opt.value}
                      className={`option ${
                        answers[q.id] === opt.value ? "selected" : ""
                      }`}
                      onClick={() => handleSelect(q.id, opt.value)}
                    >
                      <span className="option-label">{opt.value}.</span>{" "}
                      {opt.text}
                    </div>
                  ))}
                </div>
                <hr />
              </div>
            ))}

            <div className="submit-section">
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </>
  );
};

export default Mcq1;
