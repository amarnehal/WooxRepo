import React,{useState} from "react";

const Reserve = () => {
  const [userData,setUserData] = useState({

    Name:"",
    Phone:"",
    Guests:"",
    Date:"",
    Destination:"",

  });

  let name,value;
  const postUserData =(e)=>{
      name = e.target.name;
      value = e.target.value;

      setUserData({...userData,[name]:value})
  }

  const submitInfo =async (e)=>{
    e.preventDefault();
    const {Name,Phone,Guests,Date,Destinataion} = userData;  
    const response = await fetch("https://woox-d4c1e-default-rtdb.firebaseio.com/userDataRecords.json",{

    method:"POST",
    headers:{"Content-Type":"application/json",
    },
    body:JSON.stringify({Name,Phone,Guests,Date,Destinataion})
  }
    );
    if(response){
      setUserData({
        Name:"",
        Phone:"",
        Guests:"",
        Date:"",
        Destination:"",
      })
      alert("Enquiry Sent")
    }
    else{
      alert("Please try again")
    }
  
}

  return (
    <>
      <section className="Reservation-page">
        <div className="container-fluid Reservation_container">
          <div className="row">
            <div className="col-12 col-lg-12 Reservation_Container_Header">
              <div className="row">
                <div className="col-10 col-lg-10 Reservation_Content mx-auto">
                  <h3>Book Prefered Deal Here</h3>
                  <hr />
                  <h1 className="Reservation_Content_heading">
                    Make Your Reservation
                  </h1>
                  <p className="Reservation_Content_Para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    dolores voluptatum quis?
                  </p>
                  <br />

                  <button className="new-btn">Discover More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid Reservation_container_center">
          <div className="row">
            <div className="col-12 col-lg-4 Reservation_container_center_FirstDiv mx-auto">
              <i className="fa-solid fa-phone"></i>
              <h1 className="headings">Make a Phone Call</h1>
              <h5>+1-23456789</h5>
            </div>
            <div className="col-12 col-lg-4 Reservation_container_center_SecondDiv">
              <i className="fa-solid fa-envelope"></i>
              <h1 className="headings">Contact Us via Email</h1>
              <h5>company@email.com</h5>
            </div>
            <div className="col-12 col-lg-4 Reservation_container_center_ThirdDiv mx-auto">
              <i className="fa-solid fa-location-dot"></i>
              <h1 className="headings">Visit Our Offices</h1>
              <h5>24th Street North Avenue London, UK</h5>
            </div>
          </div>
        </div>

        <div className="container Reservation_Container_form">
          <div className="row">
            <div className="col-10 col-lg-12 mt-5">
              <h1 className="text-center">Enquiry Form</h1>
              
              <form method="POST">
            
              <div className="row">
                
                <div className="col-12 col-lg-6 Reservation_form">
                      <div className="mb-3">
                        <input type="text" className="form-control form_input" placeholder="Name"
                          name="Name"
                          value={userData.Name}
                          onChange={postUserData}
                        
                        />
                      </div>
          
                </div>
                <div className="col-12 col-lg-6">
                      <div className="mb-3">
                        <input type="tel" className="form-control form_input" placeholder="Phone Number"
                        name="Phone"
                        value={userData.Phone}
                        onChange={postUserData}
                        />
                      </div>
                    
                </div>
                <div className="col-12 col-lg-6">
                  <div className="mb-3">
                <input type="number" className="form-control form_input" placeholder="Number of Guests"
                 name="Guests"
                 value={userData.Guests}
                 onChange={postUserData}/>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="mb-3">
                        <input type="date" className="form-control form_input" placeholder="Select Booking Date"
                         name="Date"
                         value={userData.Date}
                         onChange={postUserData}
                        />
                      </div>
                </div>
                <div className="col-12 col-lg-12">
                      <div className="mb-3">
                        <input type="text" className="form-control form_input" placeholder="Enter Your Destination"
                         name="Destination"
                         value={userData.Destination}
                         onChange={postUserData}
                        />
                      </div>
                  </div> 
                </div>
                <div className="col-12 mb-2 form_end">
                <button type="submit" className="form-control mb-4 form_btn" onClick={submitInfo}>Make Your Reservation Now</button> 
                </div>
                </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reserve;
