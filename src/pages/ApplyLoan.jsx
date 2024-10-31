
import "../App.css"


function ApplyLoan() {
  return (
  <>
<div className="test">
      <div className="bg-img-3 bg-style">
      

        <div className="about-con">
      <h3 className="About-text">
      Apply Loan
      </h3>
     </div>
      </div>
    </div>

        <div className="form-2 p-4">
                <div className="form-container-2 p-4">
                  <form className="row g-3">
                    <div className="col-md-12">
                      <div className="heading">
                        <h4>How much do you want?</h4>
                        <p>We provide online instant loans with quick approval that suit your term length</p>
                      </div>
                    </div>

                    <div className="select">
                      <div className="col-md-12">

                      <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Your Name"/>
                      <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Email"/>
                      <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Phone no."/>
                      
                        <select id="inputState" className="form-select">
                          <option selected>Purpose</option>
                          <option>Purpose 1</option>
                          <option>Purpose 2</option>
                          <option>Purpose 3</option>
                        </select>


                        <select id="inputState" className="form-select">
                          <option selected>Amount</option>
                          <option>$10</option>
                          <option>$40</option>
                          <option>$50</option>
                        </select>

                        <select id="inputState" className="form-select">
                          <option selected>Month</option>
                          <option>3 Month</option>
                          <option>6 Month</option>
                          <option>9 Month</option>
                          <option>12 Month</option>
                        </select>
                      </div>

                      <div className="pay-text p-3">
                        <p>You have to pay: $0</p>
                      </div>

                    <div className="row">
                      <div className="col-lg-12 ">
                        <textarea className="text-area-con" placeholder="Message"/>
                      </div>
                    </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary con-btn "
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
  </>
  )
}

export default ApplyLoan