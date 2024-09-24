import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Dillan.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest places for a vacation</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Give the history of UW-Madison</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Summarize the Declaration of Independance</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Make the following code clearer</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main