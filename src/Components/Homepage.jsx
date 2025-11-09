import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
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
    {
      icon: faInstagram,
      url: "https://www.instagram.com/update_edu/?igsh=bDF3eDUxOG1wbHZ2",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/company/updateedu/posts/?feedView=all&viewAsMember=true",
    },
  ];

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

  const whoItems = [
    {
      icon: "🎓",
      title: "College Students (UG / PG)",
      text: "From any stream — step up, challenge yourself & showcase your talent!",
    },
    {
      icon: "💼",
      title: "Jobseekers",
      text: "Preparing for placements or interviews? Sharpen your career edge here.",
    },
    {
      icon: "🚀",
      title: "Young Professionals",
      text: "Explore growth, test your skills & unlock new career opportunities.",
    },
    {
      icon: "🌟",
      title: "Interns & Freshers",
      text: "Kickstart your journey with confidence and stand out from the crowd.",
    },
  ];

  const whyItems = [
    {
      icon: "🏅",
      title: "National Recognition",
      text: "Earn a Nationally Recognized Certificate from upDt Education Technology Pvt. Ltd.",
    },
    {
      icon: "💼",
      title: "Boost Your Profile",
      text: "Enhance your LinkedIn & Resume with verified career-ready credentials.",
    },
    {
      icon: "💰",
      title: "Win from ₹1,00,000+ Prize Pool",
      text: "Cash rewards, vouchers, learning passes & more exciting prizes await!",
    },
    {
      icon: "🤝",
      title: "Connect with Experts",
      text: "Network with MNC mentors, recruiters & industry professionals.",
    },
    {
      icon: "🎓",
      title: "Exclusive Access",
      text: "Unlock premium career training sessions & internship opportunities.",
    },
  ];

  return (
    <>
      <Home />

      {/* box 1 start */}

      <div className="inputbox-section d-flex align-items-center justify-content-center text-center text-white">
        <div className="container-box">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="headline display-4 fw-bold gradient-text">
              🏆 Career Readiness Challenge 2025
            </h1>
            <h4 className="fw-bold text-dark fs-3 heading-text">
              India's Biggest Online Career & Employability Quiz
            </h4>
          </motion.div>

          <motion.div
            className="info-card mx-auto mt-5 p-md-0 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <p className=" text-dark mb-0 p-md-4 p-3 paragraph">
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

          <motion.div
            className="mt-5"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              href="#register"
              variant="light"
              size="lg"
              className="text-danger fw-semibold px-4 py-2 shadow-lg register-btn"
              onClick={openModal}
            >
              Register Now
            </Button>
          </motion.div>
          {/* About the Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h3 className="fw-bold fs-1 mb-3 mt-5 gradient-text">
              🎓 About the Challenge
            </h3>
            <p
              className="fs-5 text-muted mx-auto"
              style={{ maxWidth: "800px" }}
            >
              The <strong>Career Readiness Challenge 2025</strong> is a
              National-Level Online Competition designed to assess and enhance
              the employability, professional awareness, and workplace readiness
              of India’s youth.
            </p>
            <p
              className="fs-5 text-muted mx-auto"
              style={{ maxWidth: "800px" }}
            >
              Presented by <strong>upDt Education Technology Pvt. Ltd.</strong>,
              this initiative combines learning, testing, and rewards —
              empowering students and jobseekers to become career-ready for the
              corporate world.
            </p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="fs-5 fw-semibold text-primary mt-4"
            >
              “Not just a quiz — it’s your first step towards a career-ready
              future!”
            </motion.p>
          </motion.div>

          {/* Who Can Participate? */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-9"
          >
            <h3 className="fw-bold fs-1 mb-3 gradient-text">
              💼 Who Can Participate?
            </h3>
            <p className="text-muted fs-5 mb-0">
              Open for all who are ready to learn, grow & prove their potential!
            </p>
          </motion.div>

          <Row className="gy-4 section-card-timeline">
            {whoItems.map((item, index) => (
              <Col key={index} xs={12} md={6} lg={3} className="d-flex">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex-fill"
                >
                  <Card
                    className="border-0 text-center p-3 rounded-4 shadow-sm flex-fill"
                    style={{
                      background: "#fff",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <div>
                      <div className="fs-1 mb-3">{item.icon}</div>
                      <Card.Title className="fw-bold fs-5 text-dark mb-3">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="text-muted">{item.text}</Card.Text>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mt-3 mb-5 fs-5 fw-semibold text-primary"
          >
            ✨ No prior experience needed — just passion to learn, grow & win!
          </motion.p>

          {/* Why Participate? */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-0"
          >
            <h3 className="fw-bold fs-1 gradient-text mb-3">🎯 Why Participate?</h3>
            <p className="text-muted fs-5 mb-0">
              Because every step you take here pushes you closer to success!
            </p>
          </motion.div>

          <Row className="gy-4 section-card-timeline">
            {whyItems.map((item, index) => (
              <Col key={index} xs={12} md={6} lg={4} className="d-flex">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex-fill"
                >
                  <Card
                    className="border-0 text-center p-4 rounded-4 shadow-sm flex-fill"
                    style={{
                      background: "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <div>
                      <div className="fs-1 mb-3">{item.icon}</div>
                      <Card.Title className="fw-bold fs-5 text-dark mb-3">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="text-muted">{item.text}</Card.Text>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* About Section */}
          {/* <motion.div
            className="section-card mt-5 bg-white text-dark p-4 rounded-4 shadow-sm"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-success mb-3 heading">
              🎓 About the Challenge
            </h3>
            <p className="paragraph">
              The Career Readiness Challenge 2025 is a National-Level Online
              Competition designed to assess and enhance the employability,
              professional awareness, and workplace readiness of India’s youth.
            </p>
            <p className="paragraph">
              Presented by <strong>upDt Education Technology Pvt. Ltd.</strong>,
              this initiative combines learning, testing, and rewards —
              empowering students and jobseekers to become career-ready for the
              corporate world.
            </p>
            <blockquote className="fst-italic text-primary">
              “Not just a quiz — it’s your first step towards a career-ready
              future!”
            </blockquote>
          </motion.div> */}

          {/* Why Participate & Who Can Participate */}
          {/* <motion.div
            className="section-card-timeline mt-5 bg-white text-dark p-4 rounded-4 shadow-sm"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="timeline d-flex flex-column  flex-md-row justify-content-between gap-4">
              <ul
                style={{ fontSize: "17px" }}
                className="paragraph list-unstyled timeline-card text-start"
              >
                <h3 className="text-danger mb-3 heading">
                  🎯 Who Can Participate?
                </h3>
                <li>✅ College Students - UG / PG (Any Stream)</li>
                <li>✅ Jobseekers - Preparing for placements or interviews</li>
                <li>
                  ✅ Young Professionals - Exploring career growth opportunities
                </li>
                <li>
                  ✅ Interns & Freshers - Building their first professional edge
                </li>
                <p className="fw-semibold text-secondary mt-2">
                  📘 No prior experience required — just enthusiasm to learn,
                  grow & win! 🚀
                </p>
              </ul>

              <ul
                style={{ fontSize: "17px" }}
                className="paragraph list-unstyled timeline-card text-start"
              >
                <h3 className="text-warning mb-3 heading">
                  💡 Why Participate?
                </h3>
                <li>
                  ✨ Nationally Recognized Certificate from upDt Education
                  Technology Pvt. Ltd.
                </li>
                <li>
                  ✨ Boost your LinkedIn Profile & Resume with verified
                  credentials
                </li>
                <li>
                  ✨ Win from ₹1,00,000+ Prize Pool — Cash, Vouchers, Learning
                  Passes & more
                </li>
                <li>
                  ✨ Connect with MNC Mentors, Recruiters & Industry Experts
                </li>
                <li>
                  ✨ Unlock access to career training sessions & internship
                  opportunities
                </li>
              </ul>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-3"
          >
            <h3 className="fw-bold fs-1 gradient-text mb-3">
              🏆 Reward Structure – Worth ₹1,00,000+
            </h3>
            <p className="text-muted fs-5">
              🎁Over <strong>500 Winners</strong> will be rewarded with exciting
              prizes, vouchers & certificates!
            </p>
          </motion.div>

          {/* Reward Structure */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="table-responsive"
          >
            <table className="table table-bordered align-middle text-center bg-white rounded-4 shadow-sm overflow-hidden">
              <thead
                style={{ background: "#d4edda" }}
                className="text-dark fs-6"
              >
                <tr>
                  <th>Category</th>
                  <th>Reward</th>
                  <th>Worth</th>
                </tr>
              </thead>
              <tbody className="fs-6 text-muted">
                {[
                  [
                    "Top 3 Winners",
                    "Cash Prize + Digital Trophy + Premium Certificate",
                    "₹25,000",
                  ],
                  [
                    "Top 50 Achievers",
                    "upDate Career Training Voucher + Recognition Badge",
                    "₹20,000",
                  ],
                  [
                    "Next 100 Participants",
                    "Skill Growth Voucher + eGift Card + Certificate",
                    "₹20,000",
                  ],
                  [
                    "Next 200 Participants",
                    "Internship Access Pass + Mentorship Coupon + Certificate",
                    "₹20,000",
                  ],
                  [
                    "Remaining Eligible Participants",
                    "upDate Discount Coupon + Certificate",
                    "₹15,000",
                  ],
                ].map(([cat, reward, worth], i) => (
                  <tr key={i}>
                    <td className="fw-semibold">{cat}</td>
                    <td>{reward}</td>
                    <td className="fw-bold text-success">{worth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mt-4 fs-5 fw-semibold text-primary"
          >
            🪙 All participants receive an{" "}
            <span className="text-success">Instant E-Certificate</span> after
            quiz submission!
          </motion.p>

          {/* Reward Structure */}
          {/* <motion.div
            className="section-card-timeline mt-5 bg-white text-dark p-4 rounded-4 shadow-sm"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="gradient-text mb-3 heading">
              🏅 Reward Structure – Worth ₹1,00,000+
            </h3>
            <p className="fs-5">
              🎁 Over 500 Winners will be rewarded with exciting prizes,
              vouchers & certificates!
            </p>
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
            <p className="mt-3">
              🪙 All participants receive an{" "}
              <strong>Instant E-Certificate</strong> after quiz submission.
            </p>
          </motion.div> */}

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 "
          >
            <h3 className="fw-bold fs-1 gradient-text mb-3 ">
              ⏰ Challenge Timeline
            </h3>
            <p className="text-muted fs-5 mb-0">
              Stay updated with key dates and milestones of the Career Readiness
              Challenge 2025.
            </p>
          </motion.div>

          <Row className="gy-4 section-card-timeline">
            {[
              {
                title: "Phase 1 – Open National Round",
                details: [
                  "🟢 Start: 1st November 2025, 1:00 PM",
                  "🔚 End: 25th November 2025, 11:45 PM",
                  "🌍 Open for All Participants",
                  "🎖️ Reward: E-Certificate + Qualification for Phase 2",
                ],
                gradient:
                  "linear-gradient(135deg, rgba(212, 237, 218, 0.9), rgba(255,255,255,0.8))",
              },
              {
                title: "Phase 2 – Finalists' Round",
                details: [
                  "🚀 Start: 25th November 2025",
                  "🏁 End: 5th December 2025",
                  "🏅 Eligibility: Only top scorers from Phase 1",
                  "📢 Winners Announcement: 6th December 2025",
                  "🌐 Platform: upDate Official Website & Social Media",
                ],
                gradient:
                  "linear-gradient(135deg, rgba(231, 241, 255, 0.9), rgba(255,255,255,0.8))",
              },
            ].map((phase, i) => (
              <Col xs={12} md={6} key={i} className="d-flex">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex-fill"
                >
                  <Card
                    className="border-0 rounded-4 shadow-sm text-start p-4 flex-fill"
                    style={{
                      background: phase.gradient,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
                      height: "100%",
                    }}
                  >
                    <h5 className="fw-bold mb-3 text-dark">{phase.title}</h5>
                    {phase.details.map((line, j) => (
                      <p key={j} className="text-muted fw-semibold mb-2">
                        {line}
                      </p>
                    ))}
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Challenge Format */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-0"
          >
            <h3 className="fw-bold fs-1 gradient-text mb-3">🧩 Challenge Format</h3>
            <p className="text-muted fs-5 mb-0">
              Get ready to test your skills in a fast-paced, career-readiness
              challenge!
            </p>
          </motion.div>

          <Row className="gy-4 mb-0 justify-content-center section-card-timeline">
            {[
              {
                icon: "🧠",
                text: "Total Questions: 10 (MCQ + Situational + Objective Mix)",
              },
              { icon: "⏱️", text: "Time Limit: 10 Minutes (600 Seconds)" },
              {
                icon: "💯",
                text: "Marking Scheme: 1 Mark per Question | No Negative Marking",
              },
              { icon: "📲", text: "Attempt: One per participant" },
              { icon: "📄", text: "Mode: 100% Online" },
            ].map((item, i) => (
              <Col xs={12} md={6} lg={4} key={i} className="d-flex">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex-fill"
                >
                  <Card
                    className="border-0 rounded-4 text-center p-4 flex-fill"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,247,255,0.8))",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
                      height: "100%",
                    }}
                  >
                    <div className="fs-1 mb-3">{item.icon}</div>
                    <p className="fw-semibold text-dark mb-0">{item.text}</p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Timeline */}
          {/* <motion.div
            className="section-card mt-5 bg-white text-dark p-4 rounded-4 shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-info mb-3 heading">📅 Challenge Timeline</h3>
            <div className="timeline d-flex flex-column flex-md-row justify-content-between gap-4">
              <ul className="paragraph list-unstyled timeline-card">
                <h5>Phase 1 – Open National Round</h5>
                <li>📆 Start: 1st November 2025, 1:00 PM</li>
                <li>⏰ End: 25th November 2025, 11:45 PM</li>
                <li>👥 Open for All Participants</li>
                <li>📜 Reward: E-Certificate + Qualification for Phase 2</li>
              </ul>

              <ul className="paragraph list-unstyled timeline-card">
                <h5>Phase 2 - Finalists' Round</h5>
                <li>📆 Start: 25th November 2025</li>
                <li>⏰ End: 5th December 2025</li>
                <li>🎯 Eligibility: Only top scorers from Phase 1</li>
                <li>🏆 Winners Announcement: 6th December 2025</li>
                <li>📢 Platform: upDate Official Website & Social Media</li>
              </ul>
            </div>
          </motion.div> */}

          {/* Challenge Format */}
          {/* <motion.div
            className="section-card mt-5 bg-white text-dark p-4 rounded-4 shadow-sm"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-danger mb-3 heading">🧩 Challenge Format</h3>
            <ul className="paragraph list-unstyled">
              <li>
                🧠 Total Questions: 10 (MCQ + Situational + Objective Mix)
              </li>
              <li>⏱️ Time Limit: 10 Minutes (600 Seconds)</li>
              <li>
                💯 Marking Scheme: 1 Mark per Question | No Negative Marking
              </li>
              <li>📲 Attempt: One per participant</li>
              <li>📄 Mode: 100% Online</li>
            </ul>
          </motion.div> */}

          {/* Final CTA Section */}
          <motion.div
            className=" text-center mt-5"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="fs-2 gradient-text mb-3 heading">
              🚀 Ready to Prove You’re Career-Ready?
            </h3>
            <p className="paragraph text-black">
              Test your skills, earn national recognition & win from a ₹1,00,000
              prize pool!
            </p>
            <p className="paragraph text-black mb-4">
              🎯 Learn • Compete • Win — with upDt Education Technology Private
              Limited
            </p>
            <Button
              href="#register"
              variant="light"
              size="lg"
              className="text-danger fw-semibold px-4 py-2 shadow-lg register-btn"
              onClick={openModal}
            >
              Register Now
            </Button>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className=" text-center mt-5"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="fs-2 gradient-text mb-3 heading">
              🌐 Follow & Stay Connected
            </h2>
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
                    color: "red",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "red";
                    e.currentTarget.style.transform = "scale(1.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "red";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </motion.div>

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
        </div>
      </div>

      <footer className="footer">
        <p className="footer-text">
          Copyright © {new Date().getFullYear()}{" "}
          <strong>upDate Education</strong> upDate is a part of upDt Education
          Technology Private Limited All rights reserved
        </p>
      </footer>

      {/* box 1 end */}

      {/* <div className="first-container container-fluid bg-danger bg-gradient text-white ">
        <div className="">
    
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="headline  text-center">
              🏆 Career Readiness Challenge 2025
            </h1>
            

            <div className="text-center">
              <Button
                href="#register"
                variant="light"
                size="lg"
                className=" text-danger fw-semibold  w-sm-auto"
                onClick={openModal}
              >
                Register Now
              </Button>
            </div>
          </motion.div>

          
          <motion.div
            className="mt-4 mt-lg-5 mt-ls-5 first-section-card  p-4 p-md-5 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-danger mb-3">
              India's Biggest Online Career & Employability Quiz
            </h4>
            <p className="mt-3 text-dark fs-5 mb-0">
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
        </div>
      </div> */}

      {/* <div className="homepage-bg"> */}
      {/* <div className="heading">
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

          
        </div> */}

      {/* Modal Code */}
      {/* <Modal
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
        </Modal> */}

      {/* <motion.div
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
        </motion.div> */}

      {/* About Section */}
      {/* <motion.div
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
        </motion.div> */}

      {/* Why Participate & Who Can Participate */}
      {/* <motion.div
          className="section-card-timeline"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="timeline d-flex justify-content-between gap-4">
            <ul
              style={{
                fontSize: "17px",
              }}
              className="fs-0 list-unstyled timeline-card"
            >
              <h3 className="text-danger mb-3">🎯 Who Can Participate?</h3>
              <li>✅ College Students - UG / PG (Any Stream)</li>
              <li>✅ Jobseekers - Preparing for placements or interviews</li>
              <li>
                ✅ Young Professionals - Exploring career growth opportunities
              </li>
              <li>
                ✅ Interns & Freshers - Building their first professional edge
              </li>
              <p className="fw-semibold text-secondary">
                📘 No prior experience required — just enthusiasm to learn, grow
                & win! 🚀
              </p>
            </ul>

            <ul
              style={{
                fontSize: "17px",
              }}
              className="fs-0 list-unstyled timeline-card"
            >
              <h3 className="text-warning mb-3">💡 Why Participate?</h3>
              <li>
                ✨ Nationally Recognized Certificate from upDt Education
                Technology Pvt. Ltd.
              </li>
              <li>
                ✨ Boost your LinkedIn Profile & Resume with verified
                credentials
              </li>
              <li>
                ✨ Win from ₹1,00,000+ Prize Pool — Cash, Vouchers, Learning
                Passes & more
              </li>
              <li>
                ✨ Connect with MNC Mentors, Recruiters & Industry Experts
              </li>
              <li>
                ✨ Unlock access to career training sessions & internship
                opportunities
              </li>
            </ul>
          </div>
        </motion.div> */}

      {/* Reward Structure */}
      {/* <motion.div
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
        </motion.div> */}

      {/* Timeline */}
      {/* <motion.div
          className="section-card "
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-info mb-3">📅 Challenge Timeline</h3>
          <div className="timeline d-flex justify-content-between gap-4">
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
        </motion.div> */}

      {/* <motion.div
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
        </motion.div> */}

      {/* Social Media */}
      {/* <motion.div
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
        </motion.div> */}

      {/* <motion.div
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
        </motion.div> */}
      {/* </div> */}

      {/* <footer className="footer">
        <p className="footer-text">
          Copyright © {new Date().getFullYear()}{" "}
          <strong>upDate Education</strong> upDate is a part of upDt Education
          Technology Private Limited All rights reserved
        </p>
      </footer> */}
    </>
  );
};

export default Homepage;
