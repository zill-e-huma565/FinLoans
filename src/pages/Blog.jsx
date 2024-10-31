
import "../App.css"

import about from "../Images/about.png.webp"
import service1 from "../Images/service_1.png.webp"
import service2 from "../Images/service_2.png.webp"
import service3 from "../Images/service_3.png.webp"

function Blog() {
  return (
 <>
   <div className="test">
      <div className="bg-img-4 bg-style">
      

        <div className="about-con">
      <h3 className="About-text">
       Blog
      </h3>
     </div>
      </div>
    </div>



    <div className="row m-5 sec3-div">
<div className="col-lg-6 col-md-6">
    <img className="about-img" src={about}/>
</div>
<div className="col-lg-6 col-md-6 choose-text mt-5">
    <h1>Why Choose Us?</h1>
    <p>Esteem spirit temper too say adieus who direct esteem.It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable.</p>
    <div className="services ">
        <ul>
          <li>Loans with quick approval.</li>
          <li>Customize a loan based on the amount.</li>
          <li>Good credit profile and you have built your loan.</li>
          <li>We provide online instant cash loans.</li>
        </ul>

        </div>
        <a href="/"> <button type="button" className="btn btn-primary button mt-2">
                About Us
              </button></a>
</div>
    </div>

    <div>
    
    <div className="text-div">
    <div className="line"></div>
        <h1  className="text-center">What we offer for you</h1>
        <p className="text-center">We provide online instant cash loans with quick approval that suit your term</p>
    </div>

    <div className="row service-container m-5 ">
      <div className="col-lg-4 col-md-6 p-5 col-container">
        <div className="service-first-div">
          <img className="mb-3 " src={service1}/>
          <p className="text-white mt-4">Home Loan</p>
          <h3 className="strong">$3000-$10000</h3>
        </div>
        <div className="services text-white mt-4">
        <ul>
          <li>Borrow-$350 over 3 months</li>
          <li>Interest rate - 292% pa fixed</li>
          <li>Total amount payable - $525.12</li>
          <li>Representative - 1,286% APR</li>
        </ul>

        </div>
        <button className="con-btn " type="submit"> Apply Now</button>
      </div>


      <div className="col-lg-4 col-md-6 p-5  col-container">
        <div className="service-first-div">
          <img className="mb-3 " src={service2}/>
          <p className="text-white mt-4">Car Loan</p>
          <h3 className="strong">$3000-$10000</h3>
        </div>
        <div className="services text-white mt-4">
        <ul>
          <li>Borrow-$350 over 3 months</li>
          <li>Interest rate - 292% pa fixed</li>
          <li>Total amount payable - $525.12</li>
          <li>Representative - 1,286% APR</li>
        </ul>

        </div>
        <button className="con-btn " type="submit"> Apply Now</button>
      </div>

      <div className="col-lg-4 col-md-6 p-5  col-container ">
        <div className="service-first-div">
          <img className="mb-3 " src={service3}/>
          <p className="text-white mt-4">Education Loan</p>
          <h3 className="strong">$3000-$10000</h3>
        </div>
        <div className="services text-white mt-4">
        <ul>
          <li>Borrow-$350 over 3 months</li>
          <li>Interest rate - 292% pa fixed</li>
          <li>Total amount payable - $525.12</li>
          <li>Representative - 1,286% APR</li>
        </ul>

        </div>
        <button className="con-btn " type="submit"> Apply Now</button>
      </div>
    
    </div>
    </div>
 </>
  )
}

export default Blog