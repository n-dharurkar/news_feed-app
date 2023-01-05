import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='logo192.png' alt='' />
            <p>React is an amazing JavaScript Library that is easy to use</p>
            <i className='fa fa-envelope'></i>
            <span> skynews@gmail.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +91 8888888888</span>
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src="hero1.jpg" alt='' />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className='item'>
              <img src='hero2.jpg' alt='' />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className='box'>
            <h3>CRICKET</h3>
            <div className='item'>
              <img src='hero3.jpg' alt='' />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className='item'>
              <img src='hero4.jpg' alt='' />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer