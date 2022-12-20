import React, { useState } from "react";
import OurCountriesApi from "../Api/OurCountriesApi";

const OurCountries = () => {
  const [getCountries, setCountriesVal] = useState(OurCountriesApi);
  return (
    <>
      <section className="OurCountries">
        <div className="container-fluid OurCountries-Container">
          <div className="row d-flex">
            <div className="col-lg-6 col-md-10 OurCountries-firstCont">
              <h1>
                Visit One Of Our Countries
                <br />
                Now
              </h1>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur laboriosam nesciunt vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Accusamus ea ipsa nobis.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 OurCountries-Map mb-4">
            <iframe
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20+(carebian)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      ></iframe>
            </div>
            {getCountries.map((country) => {
              return (
                <>
                <div className="row">
                  <div
                    className="col-lg-10 col-md-12 mt-3 countires-rigt-section"
                    key={country.id}
                  >
                    <div className="row">
                      <div className="col-12 mx-auto col-md-5">
                        <img className="img-fluid" src={country.img} />
                      </div>
                      <div className="col-10 col-md-7 Countries-Card-Body">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 Countries-title">
                            <h1>{country.title}</h1>
                          </div>
                          <div className="col-lg-6 col-md-6 Countries-card-button">
                            <button className="primary-btn">Explore More</button>
                          </div>
                        </div>
      
                        <h2 className="mt-1">{country.continent}</h2>
                        <p className="mb-2">{country.description}</p>
                        <hr />
                        <div className="row">
                          <div className="col-4 col-md-4">
                            <i className="fa-solid fa-house-user"></i>
                            <h2>{country.population}</h2>
                          </div>
                          <div className="col-4 col-md-4">
                            <i className="fa-solid fa-user"></i>
                            <h2>{country.population}</h2>
                          </div>
                          <div className="col-4 col-md-4">
                            <i className="fa-solid fa-globe"></i>
                            <h2>{country.value}</h2>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCountries;
