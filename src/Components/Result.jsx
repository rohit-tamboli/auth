import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Home from "./Home";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [followStatus, setFollowStatus] = useState({
    instagram: "",
    whatsapp: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    telegram: "",
  });

  const navigate = useNavigate();

  // 🔹 All platform links here
  const platformLinks = {
    instagram: "https://www.instagram.com/update_edu/?igsh=bDF3eDUxOG1wbHZ2",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=918109718211&text&type=phone_number&app_absent=0",
    facebook: "https://www.facebook.com/",
    linkedin:
      "https://www.linkedin.com/company/updateedu/posts/?feedView=all&viewAsMember=true",
    youtube: "https://www.youtube.com/",
    telegram: "https://t.me/update_edu",
  };

  // 🔹 Fetch user data on mount
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

  // 🔹 Handle select change + Auto redirect when followed
  const handleSelect = (platform, value) => {
    setFollowStatus({ ...followStatus, [platform]: value });

    if (value === "followed") {
      const url = platformLinks[platform];
      if (url) {
        window.open(url, "_blank");
      }
    }
  };

  // 🔹 Save to Firestore
  const handleSubmit = async () => {
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please login first!", { position: "bottom-center" });
      return;
    }

    try {
      const docRef = doc(db, "Users", user.uid);
      await updateDoc(docRef, {
        followStatus: followStatus,
      });

      toast.success("✅ Preferences saved successfully!", {
        position: "top-center",
      });

      navigate("/form");
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to save data. Try again.", {
        position: "bottom-center",
      });
    }
  };

  const options = [
    { value: "followed", label: "✅ Followed" },
    { value: "not-followed", label: "❌ Not Followed" },
    { value: "no-account", label: "🔒 Don’t Have Account" },
  ];

  return (
    <>
      <Home />
      <div className="result-container">
        {userDetails ? (
          <div className="result-card shadow-lg rounded-4 p-4 bg-white">
            <h3 className="quiz-title text-center mb-3 fs-2 gradient-text">
              🎉 Congratulations!
            </h3>
            <p className="text-center title-text mb-4">
              You’ve successfully completed the Career Readiness Challenge Quiz.
              <br />
              Stay updated about results, winners, and internships by following
              us on our official platforms 👇
            </p>

            {/* Follow Section */}
            <div className="follow-table mx-auto">
              {[
                "WhatsApp",
                "Instagram",
                "YouTube",
                "LinkedIn",
                "Telegram",
                "Facebook",
              ].map((platform) => (
                <div
                  key={platform}
                  className="follow-row mb-2 p-2 rounded-3 bg-light"
                >
                  <label className="fw-semibold">{platform}</label>

                  <select
                    className="form-select w-auto"
                    value={followStatus[platform.toLowerCase()] || ""}
                    onChange={(e) =>
                      handleSelect(platform.toLowerCase(), e.target.value)
                    }
                    required
                  >
                    <option value="" className="status">Select status</option>
                    {options.map((opt) => (
                      <option key={opt.value} value={opt.value} className="status-options">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Note Section */}
            <div className="note-section mt-4 text-muted">
              <p className="title-text">
                🧾 <strong>Note:</strong> All official updates, winner
                announcements, and internship results will be shared only on our
                verified pages. Follow now to stay informed!
              </p>
            </div>

            {/* Button */}
            <div className="text-center mt-4">
              <button className="submit-btn" onClick={handleSubmit}>
                Save Follow Status
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-muted fs-5 mt-5">
            Loading your Following...
          </p>
        )}
      </div>
    </>
  );
};

export default Result;
