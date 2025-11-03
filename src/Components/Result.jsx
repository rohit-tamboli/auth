import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Home from "./Home";
import { toast } from "react-toastify";
import "./Result.css";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

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
      window.location.href = "/mcq1";
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  const answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

  return (
    <>
      <Home />

      <div className="">
        {userDetails ? (
          <>
            {/* <div style={{ padding: "40px", textAlign: "center" }}>
              <h2>🎉 Quiz Submitted!</h2>
              <p>You answered {Object.keys(answers).length} questions.</p>
              <p>Thank you for completing the quiz!</p>
            </div> */}

            <div className="certificate-container">
              <div className="certificate-card">
                <h2 className="certificate-title">
                  🎓 Your Certificate is Ready!
                </h2>
                <p className="certificate-subtitle">
                  Congratulations! You’ve successfully completed the quiz.
                </p>

                <p className="follow-text">🌐 Follow Our Social Media Pages</p>
                <div className="social-links">
                  <a
                    href="https://www.updats.in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🌍 Website
                  </a>
                  {/* <a href="#" target="_blank" rel="noreferrer">
                    📘 Facebook
                  </a> */}
                  <a href="https://www.instagram.com/update_edu/?igsh=bDF3eDUxOG1wbHZ2" target="_blank" rel="noreferrer">
                    📸 Instagram
                  </a>
                  <a href="https://www.linkedin.com/company/updateedu/?viewAsMember=true" target="_blank" rel="noreferrer">
                    💼 LinkedIn
                  </a>
                  {/* <a href="#" target="_blank" rel="noreferrer">
                    ▶️ YouTube
                  </a> */}
                </div>

                <div className="certificate-section">
                  <h3>🎉 Your Certificate is Ready!</h3>
                  <p>Click below to View & Download your Certificate.</p>
                  <a href="/certificate.pdf" className="btn-view" download>
                    View Certificate
                  </a>
                </div>

                <div className="share-section">
                  <h3>📢 Share Your Achievement</h3>
                  <p>
                    Watch this short video on how to post your certificate on
                    social media.
                  </p>
                  <a href="#" className="btn-watch">
                    Watch Now
                  </a>

                  <p className="hashtags">
                    Use hashtags:
                    <br />
                    <strong>
                      #upDateEducation #WorkshopSuccess #SkillBuilding
                    </strong>
                  </p>

                  <div className="share-buttons">
                    <a href="https://www.updats.in" className="btn-share Website">
                      Website
                    </a>
                    <a href="https://www.instagram.com/update_edu/?igsh=bDF3eDUxOG1wbHZ2" className="btn-share instagram">
                      Instagram
                    </a>
                    <a href="https://www.linkedin.com/company/updateedu/?viewAsMember=true" className="btn-share linkedin">
                      LinkedIn
                    </a>
                    {/* <a href="#" className="btn-share facebook">
                      Facebook
                    </a> */}
                  </div>
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
