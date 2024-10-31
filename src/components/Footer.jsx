import logo from "../Images/footer_logo.png.webp"

function Footer() {
  return (
    <div>
    

    <div>
    <div className="row  footer-row">
      <div className="col-lg-3 col-md-6">
        <img  src={logo}/>
        <div className="footer-p m-4">

        <p>finloan@support.com</p>
        <p>+10 873 672 6782</p>
        <p>600/D, Green road, NewYork</p>
        </div>
      
      </div>

      <div className="col-lg-3 col-md-6">
<h3 className="service">Services</h3>
<ul >
  <li className="list-unstyled"><a className="service-list" href="#">SEO/SEM</a></li>
  <li  className="list-unstyled" ><a className="service-list" href="#">Web Design</a></li>
  <li  className="list-unstyled"><a className="service-list" href="#">Ecommerce</a></li>
  <li  className="list-unstyled"><a className="service-list" href="#">Digital Marketing</a></li>
</ul>
      </div>

      <div className="col-lg-3 col-md-6">
<h3 className="service">Useful Links</h3>
<ul >
  <li className="list-unstyled"><a className="service-list" href="#">About</a></li>
  <li  className="list-unstyled" ><a className="service-list" href="#">Blog</a></li>
  <li  className="list-unstyled"><a className="service-list" href="#">Contact</a></li>
  <li  className="list-unstyled"><a className="service-list" href="#">Support</a></li>
</ul>
      </div>
      <div className="col-lg-3 col-md-6">
      <h3 className="service">Subscribe</h3>
      <div className="input-group mb-3 ">
  <input type="text" className="form-control input" placeholder="Enter your mail" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary  input-btn" type="button" id="button-addon2">Subscribe</button>
</div>

      <p className="input-p">Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
    
      
     
      </div>
<div className="text-center last">
  <p className="color-p">Copyright ©2024 All rights reserved | This template is made with 	&#9829; by <a className="colorlib" href="https://colorlib.com/">Colorlib</a></p>
</div>

    </div>
    </div>
  
    
    
    </div>
  )
}

export default Footer