import React, { useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { motion } from "framer-motion";
import Home from "./Home";
import "./Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import Modal from "react-modal";
import Register from "./Register";
Modal.setAppElement("#root"); // Modal ke accessibility ke liye

const Homepage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const socialLinks = [
    { icon: faInstagram, url: "https://www.instagram.com/update_edu/?igsh=bDF3eDUxOG1wbHZ2" },
    { icon: faLinkedin, url: "https://www.linkedin.com/company/updateedu/posts/?feedView=all&viewAsMember=true" },
  ];

  const socialConnect = [
    { icon: faInstagram, url: "https://www.instagram.com/update_edu/?igsh=bDF3eDUxOG1wbHZ2" },
    { icon: faTelegram, url: "https://t.me/update_edu" },
    { icon: faLinkedin, url: "https://www.linkedin.com/company/updateedu/posts/?feedView=all&viewAsMember=true" },
    { icon: faWhatsapp , url: "https://api.whatsapp.com/send/?phone=918109718211&text&type=phone_number&app_absent=0" },
  ];
  return (
    <>
      <Home />

      <div className="homepage-bg py-5">
        {/* <Container> */}
       
        <div className="heading">
          <h1 className="fw-bold heading-text text-center text-md-star text-danger title  ">
            🏆 Career Readiness Challenge 2025
          </h1>
          <Button
            href="#register"
            variant="success"
            size="lg"
            className="btn-danger"
            onClick={openModal}
          >
            Register Now
          </Button>
        </div>

        {/* Modal Code */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="custom-modal"
          overlayClassName="custom-overlay"
        >
          <button className="close-btn" onClick={closeModal}>
            ✖
          </button>
          <div className="register-container">
            <Register />
          </div>
        </Modal>

        <motion.div
          className=" mb-5 section-card"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-danger">
            India's Biggest Online Career & Employability Quiz
          </h4>
          <p className="mt-3 text-muted fs-5">
            <strong>Organized by:</strong> upDt Education Technology Private
            Limited <br />
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
          className="section-card"
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
            this initiative combines learning, testing, and rewards — empowering
            students and jobseekers to become career-ready for the corporate
            world.
          </p>
          <blockquote className="fst-italic text-primary">
            “Not just a quiz — it’s your first step towards a career-ready
            future!”
          </blockquote>
        </motion.div>

        {/* Who Can Participate */}
        <motion.div
          className="section-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-danger mb-3">🎯 Who Can Participate?</h3>
          <ul className="fs-5 list-unstyled">
            <li>✅ College Students – UG / PG (Any Stream)</li>
            <li>✅ Jobseekers – Preparing for placements or interviews</li>
            <li>
              ✅ Young Professionals – Exploring career growth opportunities
            </li>
            <li>
              ✅ Interns & Freshers – Building their first professional edge
            </li>
          </ul>
          <p className="fw-semibold text-secondary">
            📘 No prior experience required — just enthusiasm to learn, grow &
            win! 🚀
          </p>
        </motion.div>

        {/* Why Participate */}
        <motion.div
          className="section-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-warning mb-3">💡 Why Participate?</h3>
          <ul className="fs-5 list-unstyled">
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
        </motion.div>

        {/* Reward Structure */}
        <motion.div
          className="section-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-primary mb-3">
            🏅 Reward Structure – Worth ₹1,00,000+
          </h3>
          <p className="fs-5">
            🎁 Over 500 Winners will be rewarded with exciting prizes, vouchers
            & certificates!
          </p>
          <Table bordered hover responsive className="reward-table">
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
          <p className="mt-3">
            🪙 All participants receive an{" "}
            <strong>Instant E-Certificate</strong> after quiz submission.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="section-card "
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-info mb-3">📅 Challenge Timeline</h3>
          <div className="timeline d-flex justify-content-between">
            <ul className="fs-5 list-unstyled gap-10 timeline-card">
              <h5>Phase 1 – Open National Round</h5>
              <li>📆 Start: 1st November 2025, 1:00 PM</li>
              <li>⏰ End: 25th November 2025, 11:45 PM</li>
              <li>👥 Open for All Participants</li>
              <li>
                📜 Reward: E-Certificate + Qualification for
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Phase 2
              </li>
            </ul>

            <ul className="fs-5 list-unstyled timeline-card">
              <h5>Phase 2 - Finalists' Round</h5>
              <li>📆 Start: 25th November 2025</li>
              <li>⏰ End: 5th December 2025</li>
              <li>🎯 Eligibility: Only top scorers from Phase 1</li>
              <li>
                🏆 Winners Announcement: 6th December
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2025
              </li>
              <li>
                📢 Platform: upDate Official Website &
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Social
                Media
              </li>
            </ul>
          </div>
        </motion.div>

        {/* </Container> */}

        <motion.div
          className="section-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-danger mb-3">🧩 Challenge Format</h3>
          <ul className="fs-5 list-unstyled">
            <li>🧠 Total Questions: 10 (MCQ + Situational + Objective Mix)</li>
            <li>⏱️ Time Limit: 10 Minutes (600 Seconds)</li>
            <li>
              💯 Marking Scheme: 1 Mark per Question | No Negative Marking
            </li>
            <li>📲 Attempt: One per participant</li>
            <li>📄 Mode: 100% Online</li>
          </ul>
        </motion.div>

        <motion.div
          className="section-card text-center"
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
            className="btn-danger"
            onClick={openModal}
          >
            Register Now
          </Button>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="section-card text-center"
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

        <motion.div
          className="section-card text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-success mb-3">After Quiz Completion</h3>
          <p className="fs-5">
            ✅ Instant Participation Certificate Display + Download Button
          </p>
          <p className="fs-5">
            📹 Short Video Prompt: “Post your certificate on social media and
            tag @upDate to inspire others!”
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
        </motion.div>
      </div>
      <footer className="footer">
        <p className="footer-text">
          Copyright © {new Date().getFullYear()}{" "}
          <strong>upDate Education</strong> upDate is a part of upDt Education
          Technology Private Limited All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Homepage;
