import React, { useEffect, useState, useRef } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import html2canvas from "html2canvas";
import { toast } from "react-toastify";
import Home from "./Home";
import "./Form.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Form = () => {
  const [userDetails, setUserDetails] = useState(null);
  const certificateRef = useRef(null);

  const socialConnect = [
    {
      icon: faInstagram,
      url: "https://www.instagram.com/update_edu/?igsh=bDF3eDUxOG1wbHZ2",
    },
    { icon: faTelegram, url: "https://t.me/update_edu" },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/company/updateedu/posts/?feedView=all&viewAsMember=true",
    },
    {
      icon: faWhatsapp,
      url: "https://api.whatsapp.com/send/?phone=918109718211&text&type=phone_number&app_absent=0",
    },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              setUserDetails(docSnap.data());
              setTimeout(() => downloadCertificate(), 1500); // auto download PNG
            } else {
              toast.error("⚠️ User data not found in database.");
            }
          } catch (error) {
            console.error(error);
            toast.error("Failed to load user data.");
          }
        } else {
          toast.error("Please login first!");
        }
      });
    };

    fetchUserData();
  }, []);

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;

    try {
      const canvas = await html2canvas(certificateRef.current, { scale: 2 });
      const link = document.createElement("a");
      link.download = `Certificate_${
        userDetails?.fullName || "Participant"
      }.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      // toast.success("🎓 Certificate downloaded successfully!");
    } catch (error) {
      console.error("Error generating certificate:", error);
      toast.error("Failed to generate certificate. Try again.");
    }
  };

  const shareMessage = `
I just completed the Career Readiness Challenge 2025 by upDt Education! 🎓
Testing my employability, confidence & professional skills 💼
#CareerReadyWithupDt #upDateEducation
  `;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=https://updateedu.in&quote=${encodeURIComponent(
      shareMessage
    )}`,
    instagram: "https://www.instagram.com",
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=https://updateedu.in&title=${encodeURIComponent(
      "Career Readiness Challenge 2025"
    )}&summary=${encodeURIComponent(shareMessage)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      shareMessage
    )}`,
  };

  return (
    <>
      <Home />
      <div className="certificate-page">
        {userDetails ? (
          <>
            {/* 🎓 Certificate Display */}
            <div className="certificate-container" ref={certificateRef}>
              <h2>🏆 Certified Participant</h2>
              <p>This certifies that</p>
              <h1 className="participant-name">{userDetails.fullName}</h1>

              <p>
                has successfully completed the{" "}
                <strong>Career Readiness Challenge 2025</strong>
              </p>

              {/* 🧠 Show Score */}
              <p className="score-display">
                <strong>Score:</strong> {userDetails.score || "N/A"} / 10
              </p>

              <p>
                Awarded by <strong>upDt Education Technology Pvt. Ltd.</strong>
              </p>
              <p>Date: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Actions */}
            <div className="actions">
              <button className="btn-download" onClick={downloadCertificate}>
                Download Certificate
              </button>

              <h4>Share Your Achievement</h4>
              <p className="share-text">
                “I just completed the Career Readiness Challenge 2025 by upDt
                Education! Testing my employability, confidence & professional
                skills ”
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: "50px",
                }}
              >
                {socialConnect.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#CB444A",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "red";
                      e.currentTarget.style.transform = "scale(1.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#CB444A";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p className="loading">Loading your certificate...</p>
        )}
      </div>
    </>
  );
};

export default Form;
