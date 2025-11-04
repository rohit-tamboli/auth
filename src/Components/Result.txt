import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import Home from "./Home";
import { toast } from "react-toastify";
import "./Result.css";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async (user) => {
    if (!user) {
      console.log("User not logged in");
      return;
    }

    const docRef = doc(db, "Users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      let newId = data.certificateId;

      // ✅ If no certificateId yet, generate and store it
      if (!newId) {
        newId = `CERT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        try {
          await updateDoc(docRef, {
            certificateId: newId,
            completedAt: new Date(),
          });
          console.log("✅ Certificate ID saved:", newId);
          toast.success("Certificate ID generated!");
        } catch (error) {
          // Fallback if document doesn’t exist yet
          await setDoc(
            docRef,
            {
              certificateId: newId,
              email: user.email,
              completedAt: new Date(),
            },
            { merge: true }
          );
          console.log("✅ Certificate ID created using setDoc:", newId);
        }
      }

      setUserDetails({ ...data, certificateId: newId });
    } else {
      console.log("User document not found — creating new one");
      const newId = `CERT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      await setDoc(docRef, {
        email: user.email,
        certificateId: newId,
        completedAt: new Date(),
      });
      setUserDetails({ email: user.email, certificateId: newId });
      toast.success("Certificate created for new user!");
    }
  };

  // ✅ Correct useEffect — waits until Firebase confirms user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserData(user);
      } else {
        console.log("User not logged in");
        toast.error("User not logged in!");
      }
    });

    return () => unsubscribe();
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

  const answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

  return (
    <>
      <Home />

      <div className="">
        {userDetails ? (
          <>
            

            <div className="certificate-container">
              <div className="certificate-card">
                <h2 className="certificate-title">
                  🎓 Your Certificate is Ready!
                </h2>
                <p>
                <strong>Certificate ID:</strong> {userDetails.certificateId}
              </p>
                <p className="certificate-subtitle">
                  Congratulations! You've successfully completed the quiz.
                </p>

                <a href="/certificate.pdf" className="btn-view" download>
                View Certificate
              </a>
              <p>Click below to View & Download your Certificate.</p>

                <p className="follow-text">🌐 Follow Our Social Media Pages</p>
                <div className="social-links">
                  <a href="https://www.updats.in" target="_blank" rel="noreferrer">
                    🌍 Website
                  </a>
                  <a
                    href="https://www.instagram.com/update_edu/?igsh=bDF3eDUxOG1wbHZ2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📸 Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/company/updateedu/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    💼 LinkedIn
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
                    <a
                      href="https://www.instagram.com/update_edu/?igsh=bDF3eDUxOG1wbHZ2"
                      className="btn-share instagram"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/updateedu/?viewAsMember=true"
                      className="btn-share linkedin"
                    >
                      LinkedIn
                    </a>
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
