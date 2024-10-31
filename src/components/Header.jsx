import Logo from "../Images/logo.png.webp"
import '../App.css'
import { Link } from "react-router-dom"


function Header() {
  return (
   
    <div>
      
        <div className="nav headerDiv ">
          <nav className="navbar navbar-expand-lg nav-container ">
            <div className="container-fluid">
              <div className="navbar-brand" href="#">
                <img className="logo" src={Logo} />
              </div>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse list"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-3 mb-lg-0 ">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link  " aria-current="page" >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/loan" className="nav-link " aria-current="page" >
                      Loan
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link " aria-current="page" >
                      About
                    </Link>
                  </li>
          
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                    href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/applyloan">
                          Apply Loan
                        </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item" to="/applyloan">
                          Elements
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Blog
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item " to="/blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/blog">
                          Single-Blog
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="section-3">
            <p className="nav-link-btn contact"> +10 673 567 367</p>
            <Link to="/applyloan">
              <button
                type="button"
                className="btn btn-outline-info p-2 apply-btn"
              >
              Apply For A Loan
             
              </button>
            </Link>
          </div>
        </div>

       
    
 
    
    </div>
 
  )
}

export default Header