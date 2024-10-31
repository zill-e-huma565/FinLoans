
import "../App.css"

import faq from "../Images/faq.png"

function Faq() {
  return (
   <>
    <div className="test">
      <div className="bg-img-7 bg-style">
      

        <div className="about-con">
      <h3 className="About-text">
      FAQ
      </h3>
     </div>
      </div>
    </div>


    <div className="row question-row">
<div className="col-lg-6">
    <img  className="Faq-img" src={faq}/>
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
   </>
  )
}

export default Faq