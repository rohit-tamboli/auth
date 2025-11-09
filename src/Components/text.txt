import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";

const InputBox = () => {
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
      {/* About the Challenge */}
      <section className="py-5 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h3 className="fw-bold text-success mb-3 gradient-text">
            🎓 About the Challenge
          </h3>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "800px" }}>
            The <strong>Career Readiness Challenge 2025</strong> is a
            National-Level Online Competition designed to assess and enhance the
            employability, professional awareness, and workplace readiness of
            India’s youth.
          </p>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "800px" }}>
            Presented by <strong>upDt Education Technology Pvt. Ltd.</strong>,
            this initiative combines learning, testing, and rewards — empowering
            students and jobseekers to become career-ready for the corporate
            world.
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
      </section>

      {/* Who Can Participate */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h3 className="fw-bold mb-3 gradient-text">💼 Who Can Participate?</h3>
        <p className="text-muted fs-5">
          Open for all who are ready to learn, grow & prove their potential!
        </p>
      </motion.div>

      <Row className="gy-4">
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
        className="text-center mt-5 fs-5 fw-semibold text-primary"
      >
        ✨ No prior experience needed — just passion to learn, grow & win!
      </motion.p>

      {/* Why Participate */}
      <section className="py-5 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h3 className="fw-bold gradient-text mb-3">🎯 Why Participate?</h3>
            <p className="text-muted fs-5">
              Because every step you take here pushes you closer to success!
            </p>
          </motion.div>

          <Row className="gy-4">
            {whyItems.map((item, index) => (
              <Col key={index} xs={12} md={6} lg={4}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card
                    className="border-0 text-center p-4 rounded-4 h-100"
                    style={{
                      background: "#f8f9fa",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div className="fs-1 mb-3">{item.icon}</div>
                    <Card.Title className="fw-bold fs-5 text-dark">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted mt-2">
                      {item.text}
                    </Card.Text>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Reward Structure */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h3 className="fw-bold gradient-text mb-3">
              🏆 Reward Structure – Worth ₹1,00,000+
            </h3>
            <p className="text-muted fs-5">
              Over <strong>500 Winners</strong> will be rewarded with exciting
              prizes, vouchers & certificates!
            </p>
          </motion.div>

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
        </Container>
      </section>

      {/* Challenge Timeline */}
      <section className="py-5 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h3 className="fw-bold text-success mb-3">⏰ Challenge Timeline</h3>
            <p className="text-muted fs-5">
              Stay updated with key dates and milestones of the Career Readiness
              Challenge 2025.
            </p>
          </motion.div>

          <Row className="gy-4">
            {[
              {
                title: "Phase 1 – Open National Round",
                details: [
                  "🟢 Start: 1st November 2025, 1:00 PM",
                  "🔚 End: 25th November 2025, 11:45 PM",
                  "🌍 Open for All Participants",
                  "🎖️ Reward: E-Certificate + Qualification for Phase 2",
                ],
                color: "#d4edda",
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
                color: "#e7f1ff",
              },
            ].map((phase, i) => (
              <Col xs={12} md={6} key={i}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card
                    className="border-0 h-100 p-4 rounded-4 shadow-sm"
                    style={{ background: phase.color }}
                  >
                    <h5 className="fw-bold text-success mb-3">{phase.title}</h5>
                    {phase.details.map((line, j) => (
                      <p key={j} className="text-muted mb-1 fw-semibold">
                        {line}
                      </p>
                    ))}
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InputBox;
