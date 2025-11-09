import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Home from "./Home";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Mcq1.css";

const Mcq1 = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [textAnswers, setTextAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });
  const navigate = useNavigate();
 
  // 🔹 Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          }
        }
      });
    };
    fetchUserData();
  }, []);

  // 🔹 Handle MCQ select
  const handleSelect = (questionId, optionValue) => {
    setMcqAnswers({ ...mcqAnswers, [questionId]: optionValue });
  };

  // 🔹 Handle text answers (limit 200 words)
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    const words = value.trim().split(/\s+/);
    if (words.length <= 200) {
      setTextAnswers({ ...textAnswers, [name]: value });
    }
  };

  // 🔹 Count words
  const wordCount = (text) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // 🔹 Submit all answers
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please log in first", { position: "bottom-center" });
      return;
    }

    try {
      const docRef = doc(db, "Users", user.uid);
      await updateDoc(docRef, {
        mcqAnswers: mcqAnswers,
        writtenAnswers: textAnswers,
        quizCompleted: true,
        submittedAt: new Date(),
      });

      toast.success("✅ Quiz submitted successfully!", {
        position: "top-center",
      });
      navigate("/result");
    } catch (error) {
      console.error("Error saving answers:", error);
      toast.error("Failed to submit quiz. Try again.", {
        position: "bottom-center",
      });
    }
  };

  // 🔹 Section A (MCQs)
  const mcqQuestions = [
    {
      id: 1,
      text: "What is the most effective way to improve your career readiness?",
      options: [
        { value: "A", text: "Watching random YouTube videos" },
        { value: "B", text: "Taking internships & skill-based training" },
        { value: "C", text: "Waiting for college placement only" },
        { value: "D", text: "Ignoring soft skills development" },
      ],
    },
    {
      id: 2,
      text: "Which of the following is an example of a “Soft Skill”?",
      options: [
        { value: "A", text: "Coding" },
        { value: "B", text: "Communication" },
        { value: "C", text: "Typing" },
        { value: "D", text: "Accounting" },
      ],
    },
    {
      id: 3,
      text: "Which habit helps you stay consistent in achieving goals?",
      options: [
        { value: "A", text: "Procrastination" },
        { value: "B", text: "Daily routine & planning" },
        { value: "C", text: "Ignoring feedback" },
        { value: "D", text: "Random multitasking" },
      ],
    },
    {
      id: 4,
      text: "What is the best platform to showcase your professional achievements?",
      options: [
        { value: "A", text: "WhatsApp Status" },
        { value: "B", text: "Instagram Stories" },
        { value: "C", text: "LinkedIn Profile" },
        { value: "D", text: "None of the above" },
      ],
    },
    {
      id: 5,
      text: "What is the main purpose of the Career Readiness Challenge?",
      options: [
        { value: "A", text: "To test luck" },
        { value: "B", text: "To promote social media following" },
        { value: "C", text: "To prepare youth for jobs & career success" },
        { value: "D", text: "To sell online courses" },
      ],
    },
  ];

  // 🔹 Section B (Text-based)
  const textQuestions = [
    "What are the 3 most productive things you do each day to grow your skills?",
    "Suppose you’ve just completed your graduation today — where do you envision yourself in the next 5 years?",
    "Why do you believe you can be a winner in this challenge? What qualities make you stand out?",
    "What does “Career Readiness” mean to you personally? How are you preparing for real-world opportunities?",
    "If selected for Phase 2, how will you utilize the opportunity?",
  ];
 
  return (
    <>
      <Home />
      <div className="question-container">
        {userDetails ? (
          <div className="question-card">
            <h3 className="quiz-title text-center mb-4 gradient-text">
              🎯 Section A: Multiple Choice Questions (MCQs)
            </h3>

            {mcqQuestions.map((q) => (
              <div key={q.id} className="question-block">
                <h5 className="question-title">
                  {q.id}. {q.text}
                </h5>
                <div className="options-grid">
                  {q.options.map((opt) => (
                    <div
                      key={opt.value}
                      className={`option ${
                        mcqAnswers[q.id] === opt.value ? "selected" : ""
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

            {textQuestions.map((q, index) => (
              <div key={index} className="question-block">
                <label>
                  {index + 6}. {q}
                </label>
                <textarea
                  name={`q${index + 1}`}
                  rows="3"
                  placeholder="Your answer (max 200 words)..."
                  value={textAnswers[`q${index + 6}`]}
                  onChange={handleTextChange}
                  required
                ></textarea>
                <p 
                  className={`word-count ${
                    wordCount(textAnswers[`q${index + 1}`]) > 180
                      ? "warning"
                      : ""
                  }`}
                >
                  Words: {wordCount(textAnswers[`q${index + 1}`])} / 200
                </p>
              </div>
            ))}

            <div className="submit-section mt-4">
              <button className="submit-btn" onClick={handleSubmit}>
                Submit Quiz
              </button>
            </div>
          </div>
        ) : ( 
          <p className="loading">Loading your MCQs...</p> 
        )} 
      </div>
      
    </>
  );
};

export default Mcq1;
