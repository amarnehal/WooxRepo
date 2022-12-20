import React from 'react'

const Banner = () => {
  return (
    <>
     <section className="banner">
        <div className="container-fluid banner-container">
              <div className="row">
                <div className="col-12 col-lg-12-mb-2 banner-container-header mb-2">
                    <h3>Take a Glimpse Into The Beautiful Country Of:</h3>
                    <h1><span>France</span></h1>
                    <button className='secondary-btn'>Go There</button>
                </div>
              </div>
              <div className="row">
                <div className="col-10 col-lg-10 col-md-10 mx-auto banner_container_InnerContent">
                        <div className="row">
                        <div className="col-lg-3 col-md-3 col-4 mt-4">
                                             <i className="fa-solid fa-house-user"></i>
                                                <h2 className="inner_text"><span>Population:</span>
                                                <br/>8.66MM
                                                </h2>
                                        </div>
                                        <div className="col-lg-3 col-4 col-md-3 mt-4">
                                                <i className="fa-solid fa-user"></i>
                                                <h2 className='inner_text'><span>Teritory:</span>
                                                <br/>41.266KM
                                                </h2>
                                        </div>
                                        <div className="col-lg-3 col-4 col-md-3 mt-4">
                                        <i className="fa-solid fa-globe"></i>
                                                <h2 className='inner_text'><span>Avg Price:</span>
                                                <br/>$1.100.200
                                                </h2>
                                        </div>
                                        <div className="col-lg-3 col-3 col-md-3 mt-4">
                                                <button className='primary-btn'>Explore More</button>
                                        </div>
                        </div>
                </div>
              </div>
        </div>
   </section>
    </>
  )
}

export default Banner