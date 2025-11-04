import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import Home from "./Home";
import { toast } from "react-toastify";
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

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      }
    });
  }, []);

  const handleSelect = (platform, value) => {
    setFollowStatus({ ...followStatus, [platform]: value });
  };

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
    } catch (error) {
      console.error(error);
      toast.error("Failed to save data. Try again.", {
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
      <div className="follow-container">
        <h2 className="text-center">🎉 Congratulations!</h2>
        <p className="text-center">
          You’ve successfully submitted your quiz. <br />
          Stay updated about results, winner announcements, and internship
          updates by following us on our official social media channels 👇
        </p>

        <div className="follow-table">
          {[
            "Instagram",
            "WhatsApp",
            "Facebook",
            "LinkedIn",
            "YouTube",
            "Telegram",
          ].map((platform) => (
            <div key={platform} className="follow-row">
              <label>{platform}</label>
              <select
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

        <div className="note-section">
          <p>
            🧾 <strong>Note:</strong> All official announcements, winner results,
            and internship updates will be shared only on our verified social
            media pages. Follow now to avoid missing important notifications!
          </p>
        </div>

        <div className="submit-section">
          <button className="submit-btn" onClick={handleSubmit}>
            Save Follow Status
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
