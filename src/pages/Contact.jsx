
import "../App.css"

import icon from "../Images/icon_error.png"

function Contact() {
  return (
   <>

<div className="test">
      <div className="bg-img-6 bg-style">
       

        <div className="about-con">
      <h3 className="About-text">
      Contact Us
      </h3>
     </div>
      </div>
    </div>



    <div className="Error-con ">
    <div className="inner-error">
    <div>
    <img src={icon}/>
    </div>
    
    <h4>Sorry! Something went wrong.</h4> 
    <p>This page did not load Google Maps correctly. See the JavaScript console for technical details.</p>
    </div>
      
    </div>
   </>
  )
}

export default Contact