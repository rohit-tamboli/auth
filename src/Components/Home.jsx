import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css'

import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // ✅ Only run this if user is logged in
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
            console.log("User data:", docSnap.data());
          } else {
            console.log("No user document found!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("User is not logged in");
        setUserDetails(null);
      }
    });

    // Cleanup listener on unmount
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

  return (
    <>
      <Navbar
        expand="md"
        bg="white"
        variant="light"
        className="shadow-sm border-bottom"
        sticky="top"
      >
        <Container fluid className="px-4">
          {/* Brand / Logo */}
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
            <span className="bg-danger text-white px-2">upDate</span>
          </Navbar.Brand>

          {/* Hamburger Toggle */}
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />

          {/* Offcanvas for mobile */}
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 ms-auto align-items-center d-flex gap-3">
                <Nav.Link as={Link} to="/" className="text-danger fw-semibold">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="text-dark">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login" className="text-dark">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/form" className="text-dark">
                  Form
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" className="text-dark">
                  Profile
                </Nav.Link>
                <div className="">
                  {userDetails ? (
                    <>
                      <button
                        className="btn btn-outline-danger"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <p></p>
                  )}
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Home;
