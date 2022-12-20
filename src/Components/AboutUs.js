import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="About-Us mb-2">
      <div className="container-fluid About-US-Container">
        <div className="row">
          <div className="col-lg-10 col-md-10 mx-auto">
            <div className="container glass">
              <h3 className="p-2">Explore Our Country <hr/></h3>
              <h4 className="mb-2">Welcome To Caribbean</h4>
              <p className="text-center about-us-para mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                minus repellat quam eos commodi! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Veniam, quibusdam.
              </p>
              <button className="new-btn mx-auto">Discover More</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container About-US-MidContainer mb-3">
        <div className="row">
        <h1 className="mb-2">Caribbean’s <span>Cities & Towns</span></h1>
          <div className="col-6 col-lg-3 col-md-3">
            <img src="Images/About/MidSection/card1.jpg" alt="Island" className="img-fluid"/>
          </div>
          <div className="col-6 col-lg-3 col-md-3">
            <img src="Images/About/MidSection/card2.jpg" alt="Iceland" className="img-fluid"/>
          </div>
          <div className="col-6 col-lg-3 col-md-3">
            <img src="Images/About/MidSection/card3.jpg" alt="Norway" className="img-fluid"/>
          </div>
          <div className="col-6 col-lg-3 col-md-3">
            <img src="Images/About/MidSection/card4.jpg" alt="Iceland" className="img-fluid"/>
          </div>
        </div>
      </div>

      <div className="mt-3 mb-4 p-4 mb-2 container-fluid third-section">
        <h1 className="text-center mb-2">Best Weekly Offers In Each City</h1>
        <p className="text-center mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <div className="row">
            <div className="col-12 col-md-10 col-lg-4 mx-auto card1">
              <div className="card-img">
              <img src="Images/About/MidSection/card4.jpg" />
              </div>
            <div className="card card1-body">
              <div className="card-body-upper-section ">
                <h5>Havana</h5>
                <p>$420/Person</p>
              </div>
              <hr/>
              <div className="card-body-lower-section">
                <p>5 Days Trip - Hotel inc.</p>
                <p>Airplane Bill Included</p>
                <p>Daily Places Visit</p>
              </div>
              <button className="primary-btn mx-auto">Book Now</button>
            </div>
            
          </div>
          <div className="col-12 col-md-10 col-lg-4 mx-auto card2">
              <div className="card-img">
              <img src="Images/About/MidSection/card1.jpg" />
              </div>
            <div className="card card2-body">
              <div className="card-body-upper-section">
                <h5>Kingston</h5>
                <p>$420/Person</p>
              </div>
              <hr/>
              <div className="card-body-lower-section">
                <p>5 Days Trip - Hotel inc.</p>
                <p>Airplane Bill Included</p>
                <p>Daily Places Visit</p>
              </div>
              <button className="primary-btn mx-auto">Book Now</button>
            </div>
            
          </div>
          <div className="col-12 col-md-10 col-lg-4 mx-auto card3">
              <div className="card-img">
              <img src="Images/About/MidSection/card3.jpg" />
              </div>
            <div className="card card2-body">
              <div className="card-body-upper-section">
                <h5>George-Town</h5>
                <p>$420/Person</p>
              </div>
              <hr/>
              <div className="card-body-lower-section">
                <p>5 Days Trip - Hotel inc.</p>
                <p>Airplane Bill Included</p>
                <p>Daily Places Visit</p>
              </div>
              <button className="primary-btn mx-auto">Book Now</button>
            </div>
            
          </div>
        </div>
      </div>

      </section>

      <section className="About-Us-Section-2 mt-2">
        <div className="container-fluid About-Us-2-Container mt-2">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 image-section">
              <img src="Images/About/Section2/map.jpg" className="img-fluid"/>
            </div>
            <div className="col-12 col-lg-6 col-md-6 mt-2">
              <h1 className="text-center">Discover More About Our Country</h1>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <div className="row">
                <div className="col-7 col-lg-6 col-md-6 About-Us-2-InnerContent left-side mb-2">
                <h4 className="spl-heading">150.640 +</h4>
                <p>Total Guests Yearly</p>
                </div>
                <div className="col-5 col-lg-6 col-md-6 About-Us-2-InnerContent right-side mb-2">
                <h4 className="spl-heading">175.000+</h4>
                <p>Amazing Accomodation</p>
                </div>
                <div className="col-12 col-lg-12  About-Us-2-InnerContent">
                  <div className="row">
                    <div className="col-6 col-lg-6">
                      <h4 className="spl-heading">
                      12.560+
                      </h4>
                      <p>Amazing Places</p>
                    </div>
                    <div className="col-6 col-lg-6">
                        <h4 className="spl-heading">240.580+</h4>
                        <p>Different Check-ins Yearly</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
