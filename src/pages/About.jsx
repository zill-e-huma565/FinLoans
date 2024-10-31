
import "../App.css"

import Img1 from "../Images/1.png.webp"
import Img2 from "../Images/2.png.webp"
import Img3 from "../Images/3.png.webp"
import Img4 from "../Images/4.png.webp"
import Img5 from "../Images/5.png.webp"
import author from "../Images/author.png.webp"
import service1 from "../Images/service_1.png.webp"
import service2 from "../Images/service_2.png.webp"
import service3 from "../Images/service_3.png.webp"
import about from "../Images/about.png.webp"
import Faq from "../Images/faq.png"

function About() {
  return (
    <>

<div className="test">
      <div className="bg-img-2 bg-style">
      

        <div className="about-con">
      <h3 className="About-text">
        About Us
      </h3>
     </div>
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




    <div className="text-div">
    <div className="line"></div>
        <h1  className="text-center">How it Works</h1>
        <p className="text-center">We provide online instant cash loans with quick approval that suit your term</p>
    </div>
    <div className="row num-div p-2">
<div className="col-lg-4 col-md-6 num-container mt-4">
  <p className="number ">01</p>
  <h3 className="h3">Apply for loan</h3>
  <p className="p mt-4">We will customize a loan based on the amount of cash your company need term</p>
</div>

<div className="col-lg-4 col-md-6 num-container mt-4">
  <p className="number ">02</p>
  <h3 className="h3">Application review</h3>
  <p className="p mt-4">We will customize a loan based on the amount of cash your company need term</p>
</div>


<div className="col-lg-4 col-md-6 num-container mt-4">
  <p className="number ">03</p>
  <h3 className="h3">Get funding fast</h3>
  <p className="p mt-4">We will customize a loan based on the amount of cash your company need term</p>
</div>

    </div>



    <div className="row question-row">
<div className="col-lg-6">
    <img  className="Faq-img" src={Faq}/>
</div>
<div className="col-lg-6 question-col">
<div>
  <h3 className="fre-ask-heading">Frequently ask</h3>
</div>

<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Adieus who direct esteem it esteems luckily? 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body answer">
      Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Who direct esteem it esteems?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body answer">
      Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Duis consectetur feugiat auctor?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body answer">
      Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
    </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Consectetur feugiat auctor?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body answer">
      Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
    </div>
    </div>
  </div>
</div>
</div>

        </div>




        <div className="row m-4 p-4 logo-row">
        <div className="col-lg-2">
            <img src={Img1}/>
        </div>
        <div className="col-lg-2">
            <img src={Img2}/>
        </div>
        <div className="col-lg-2">
            <img src={Img3}/>
        </div>
        <div className="col-lg-2">
            <img src={Img4}/>
        </div>
        <div className="col-lg-2">
            <img src={Img5}/>
        </div>
    </div>






    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner slider-con">

  <div className="carousel-item active  ">
  <div className="row">
  <div className="col-lg-4 col-md-6">
  <img src={author} className="d-block w-40" alt="..."/>
  </div>

  <div className="col-lg-8 col-md-6 ">
  <div className="carousel-caption d-none d-md-block">
      
        <p className=" p-4 text-black">Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food. </p>
        <span className="text-start  text-black">-Mickey Mouse</span>
     
      </div>
  </div>
</div>
      
     
   
  </div>
   
    <div className="carousel-item">
      <img src={author} className="d-block w-40" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
       
        <p className=" p-4  text-black">Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.</p>
        <span className="text-start  text-black ">-Mickey Mouse</span>
      </div>
    </div>
    <div className="carousel-item">
      <img src={author} className="d-block w-40" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
       
        <p className=" p-4  text-black">Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.</p>
        <span className="text-start  text-black ">-Mickey Mouse</span>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   
   
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
   <div className="next-prev">
   <span className="carousel-control-next-icon arrow-sign " aria-hidden="true"></span>
   <span className="visually-hidden ">Next</span>
   <span className="carousel-control-prev-icon  arrow-sign-pre" aria-hidden="true"></span>
   <span className="visually-hidden">Previous</span>
   
   </div>
   
  
  </button>
</div>



    <div className="bg-img2">
<div className="row over-row m-4">
    <div className="col-lg-8 m-auto">
        <h3 className="text-white over-text">Apply for a Loan for your startup, education or company</h3>
    </div>

    <div className="col-lg-4">
    <button type="button" className="btn btn-primary btn-lg button  ">Apply Now</button>
    </div>
</div>

    </div>


    </>
    
  )
}

export default About