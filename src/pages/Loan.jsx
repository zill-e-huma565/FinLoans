
import "../App.css"

function Loan() {
  return (
    <>
     <div className="test">
      <div className="bg-img-5 bg-style">
       

        <div className="about-con">
      <h3 className="About-text">
       Loan
      </h3>
     </div>
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
  );
}

export default Loan;
