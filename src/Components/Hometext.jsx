import React from 'react'
import Home from './Home'
import './Hometext.css'

const Hometext = () => {
  return (
    <>
    <Home/>
     <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="welcome-title">🎉 Welcome to the Event!</h1>
        <p className="welcome-text">
          Join our <strong>interactive workshop</strong> and earn your{" "}
          <strong>Participation Certificate instantly</strong> after completing the quiz.
        </p>

        <p className="welcome-text">
          Fill out the form below to get started and make the most of this learning experience.
        </p>

        <a href="/register" className="start-btn">
          Fill Out the Form
        </a>
      </div>
    </div>
    </>
  )
}

export default Hometext