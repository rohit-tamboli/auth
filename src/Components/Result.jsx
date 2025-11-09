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

  // 🔹 Handle select change
  const handleSelect = (platform, value) => {
    setFollowStatus({ ...followStatus, [platform]: value });
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
        followUpdatedAt: new Date(),
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
            <h3 className="quiz-title text-center mb-4 gradient-text">
              🎉 Congratulations!
            </h3> 
            <p className="text-center  title-text mb-4">
              You’ve successfully completed the Career Readiness Challenge Quiz. <br />
              Stay updated about results, winners, and internships by following
              us on our official platforms 👇
            </p>

            {/* Follow Section */}
            <div className="follow-table mx-auto">
              {[
                "Instagram",
                "WhatsApp",
                "Facebook",
                "LinkedIn",
                "YouTube",
                "Telegram",
              ].map((platform) => (
                <div key={platform} className="follow-row d-flex justify-content-between align-items-center mb-2 p-2 rounded-3 bg-light">
                  <label className="fw-semibold">{platform}</label>
                  <select
                    className="form-select w-auto"
                    value={followStatus[platform.toLowerCase()] || ""}
                    onChange={(e) =>
                      handleSelect(platform.toLowerCase(), e.target.value)
                    }
                    required
                  >
                    <option value="">Select status</option>
                    {options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Note Section */}
            <div className="note-section mt-4 text-muted">
              <p>
                🧾 <strong>Note:</strong> All official updates, winner
                announcements, and internship results will be shared only on our
                verified pages. Follow now to stay informed!
              </p>
            </div>

            {/* Button */}
            <div className="text-center mt-4">
              <button className="btn btn-success px-4 py-2 fw-semibold" onClick={handleSubmit}>
                Save Follow Status
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-muted fs-5 mt-5">Loading your Following...</p>
        )}
      </div>
    </>
  );
};

export default Result;
