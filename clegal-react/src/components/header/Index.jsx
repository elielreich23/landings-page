import React from 'react'
import Navbar from '../navbar/Index'
import './style.scss'


const Header = () => {
  return (
    <>
      <Navbar />
      <div className="header">                   
        <div className="cover">
          <h1 className="txt1">
            Help to reclaim your life and freedom
            <h4 className="txt2">
              We know how large objects will act, but things on a
              small scale just do not act that way.
            </h4>
          </h1>
        </div>
        <div className="btns">
          <div className="btn1">
            <div className="text">
              Get Quote Now
            </div>
          </div>
          <div className="btn2">
            <div className="text2">
              Learn More
            </div>
          </div>
        </div>
        <div className="banner">
          
        </div>
      </div>

    </>
  )
}

export default Header