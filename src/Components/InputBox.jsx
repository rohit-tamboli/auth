import React from "react";
import "./InputBox.css";
import { motion } from "framer-motion";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const InputBox = () => {
  const socialLinks = [
    { icon: faInstagram, url: "https://instagram.com/update_official" },
    { icon: faLinkedin, url: "https://linkedin.com/company/update-official" },
    { icon: faWhatsapp, url: "https://wa.me/919999999999" },
    { icon: faTelegram, url: "https://t.me/updatecommunity" },
  ];

  const openModal = () => {
    const registerSection = document.querySelector("#register");
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Home />

      <div className="inputbox-section d-flex align-items-center justify-content-center text-center text-white">
        <div className="container-box">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="headline display-4 fw-bold mb-5 gradient-text">
              🏆 Career Readiness Challenge 2025
            </h1>
            <h4 className="fw-bold text-dark mb-4 fs-3">
              India's Biggest Online Career & Employability Quiz
            </h4>
          </motion.div>

          {/* Organizer Info */}
          <motion.div
            className="info-card mx-auto mt-5 p-md-0 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <p className="fs-5 text-dark mb-0 p-md-4">
              <strong>Organized by:</strong> upDt Education Technology Private
              Limited
              <br />
              (Registered under the Companies Act 2013, Ministry of Corporate
              Affairs, Govt. of India)
              <br />
              <strong>Initiative by:</strong> upDate – IIT Alumni-Led EdTech
              Company
              <br />
              <strong>Powered by:</strong> Corporate Collaboration & National
              Digital upDate Mega Drive Campaign
            </p>
          </motion.div>

          {/* About Section */}
          <motion.div
            className="section-card mt-5 bg-light text-dark p-4 rounded-4 shadow-sm"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-success mb-3">🎓 About the Challenge</h3>
            <p className="fs-5">
              The Career Readiness Challenge 2025 is a National-Level Online
              Competition designed to assess and enhance the employability,
              professional awareness, and workplace readiness of India’s youth.
            </p>
            <p className="fs-5">
              Presented by <strong>upDt Education Technology Pvt. Ltd.</strong>,
              this initiative combines learning, testing, and rewards —
              empowering students and jobseekers to become career-ready for the
              corporate world.
            </p>
            <blockquote className="fst-italic text-primary">
              “Not just a quiz — it’s your first step towards a career-ready
              future!”
            </blockquote>
          </motion.div>

          {/* Who & Why Participate */}
          <motion.div
            className="section-card-timeline mt-5 bg-white text-dark p-4 rounded-4 shadow-sm"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="timeline d-flex flex-column flex-md-row justify-content-between gap-4">
              <ul
                style={{ fontSize: "17px" }}
                className="fs-0 list-unstyled timeline-card"
              >
                <h3 className="text-danger mb-3">🎯 Who Can Participate?</h3>
                <li>✅ College Students - UG / PG (Any Stream)</li>
                <li>✅ Jobseekers - Preparing for placements or interviews</li>
                <li>✅ Young Professionals - Exploring career growth opportunities</li>
                <li>✅ Interns & Freshers - Building their first professional edge</li>
                <p className="fw-semibold text-secondary mt-2">
                  📘 No prior experience required — just enthusiasm to learn, grow
                  & win! 🚀
                </p>
              </ul>

              <ul
                style={{ fontSize: "17px" }}
                className="fs-0 list-unstyled timeline-card"
              >
                <h3 className="text-warning mb-3">💡 Why Participate?</h3>
                <li>
                  ✨ Nationally Recognized Certificate from upDt Education
                  Technology Pvt. Ltd.
                </li>
                <li>
                  ✨ Boost your LinkedIn Profile & Resume with verified credentials
                </li>
                <li>
                  ✨ Win from ₹1,00,000+ Prize Pool — Cash, Vouchers, Learning
                  Passes & more
                </li>
                <li>✨ Connect with MNC Mentors, Recruiters & Industry Experts</li>
                <li>
                  ✨ Unlock access to career training sessions & internship
                  opportunities
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Reward Structure */}
          <motion.div
            className="section-card mt-5 bg-light text-dark p-4 rounded-4 shadow-sm"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-primary mb-3">
              🏅 Reward Structure – Worth ₹1,00,000+
            </h3>
            <Table bordered hover responsive className="reward-table mt-4">
              <thead className="table-light">
                <tr>
                  <th>Category</th>
                  <th>Reward</th>
                  <th>Worth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>🥇 Top 3 Winners</td>
                  <td>Cash Prize + Digital Trophy + Premium Certificate</td>
                  <td>₹25,000</td>
                </tr>
                <tr>
                  <td>🥈 Top 50 Achievers</td>
                  <td>upDate Career Training Voucher + Recognition Badge</td>
                  <td>₹20,000</td>
                </tr>
                <tr>
                  <td>🥉 Next 100 Participants</td>
                  <td>Skill Growth Voucher + eGift Card + Certificate</td>
                  <td>₹20,000</td>
                </tr>
                <tr>
                  <td>🎓 Next 200 Participants</td>
                  <td>
                    Internship Access Pass + Mentorship Coupon + Certificate
                  </td>
                  <td>₹20,000</td>
                </tr>
                <tr>
                  <td>💼 Remaining Eligible Participants</td>
                  <td>upDate Discount Coupon + Certificate</td>
                  <td>₹15,000</td>
                </tr>
              </tbody>
            </Table>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="section-card mt-5 bg-white text-dark p-4 rounded-4 shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-info mb-3">📅 Challenge Timeline</h3>
            <div className="timeline d-flex flex-column flex-md-row justify-content-between gap-4">
              <ul className="fs-5 list-unstyled timeline-card">
                <h5>Phase 1 – Open National Round</h5>
                <li>📆 Start: 1st November 2025, 1:00 PM</li>
                <li>⏰ End: 25th November 2025, 11:45 PM</li>
                <li>👥 Open for All Participants</li>
                <li>📜 Reward: E-Certificate + Qualification for Phase 2</li>
              </ul>
              <ul className="fs-5 list-unstyled timeline-card">
                <h5>Phase 2 - Finalists' Round</h5>
                <li>📆 Start: 25th November 2025</li>
                <li>⏰ End: 5th December 2025</li>
                <li>🎯 Eligibility: Only top scorers from Phase 1</li>
                <li>🏆 Winners Announcement: 6th December 2025</li>
                <li>📢 Platform: upDate Official Website & Social Media</li>
              </ul>
            </div>
          </motion.div>

          {/* Challenge Format */}
          <motion.div
            className="section-card mt-5 bg-light text-dark p-4 rounded-4 shadow-sm"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-danger mb-3">🧩 Challenge Format</h3>
            <ul className="fs-5 list-unstyled">
              <li>🧠 Total Questions: 10 (MCQ + Situational + Objective Mix)</li>
              <li>⏱️ Time Limit: 10 Minutes (600 Seconds)</li>
              <li>💯 Marking Scheme: 1 Mark per Question | No Negative Marking</li>
              <li>📲 Attempt: One per participant</li>
              <li>📄 Mode: 100% Online</li>
            </ul>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            className="section-card text-center mt-5"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-success mb-3">
              🚀 Ready to Prove You’re Career-Ready?
            </h3>
            <p className="fs-5">
              Test your skills, earn national recognition & win from a ₹1,00,000
              prize pool!
            </p>
            <p className="fs-5">
              🎯 Learn • Compete • Win — with upDt Education Technology Private
              Limited
            </p>
            <Button
              href="#register"
              variant="success"
              size="lg"
              className="btn-danger mt-3"
              onClick={openModal}
            >
              Register Now
            </Button>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="section-card text-center mt-5"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-primary mb-3">🌐 Follow & Stay Connected</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                fontSize: "50px",
              }}
            >
              {socialLinks.map((item, index) => (
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
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default InputBox;
