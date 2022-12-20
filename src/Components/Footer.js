import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container-fluid footer-container">
          <div className="container">
            <div className="row">
                <div className="col-7 col-md-10 footer-container-background">
                    <h3>ARE YOU LOOKING TO TRAVEL ? <br/><hr/>
                        <span>Make A Reservation By Clicking The Button</span>
                    </h3>
                </div>
                <div className="col-5 col-md-2">
                    <button className='secondary-btn'>Book Yours Now</button>
                </div>
            </div>
          </div>
        </div>
    </footer>
    </>
  )
}

export default Footer