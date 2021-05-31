import React from 'react'
import {Link,NavLink, Switch} from 'react-router-dom';
import './Header.css'
import {FaShoppingBag}  from "react-icons/fa"
import {CgProfile} from "react-icons/cg"

function Header() {
    return (


        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4">
            <div class="container">

                {/* <a class="navbar-brand" href="#">Cloud Kitchen</a>
                <button class="navbar-toggler ml-10em" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
    
                <div className="col-3 mr-2 ro">
                    <img src="https://static.wixstatic.com/media/44046359480047b8bb947746dfcdd1ee.png/v1/fill/w_75,h_75,al_c,q_85,usm_0.66_1.00_0.01/Organic%20Food%20Badge%2010.webp" className="image" /> 
                </div>
                <div className="col-9 ">
                  <p className="para">
                      
                          <span >
                          <a href="https://harshitabhatronji26.wixsite.com/website " >My Cloud Kitchen</a> 

                          </span>
                    
                      </p>  
                </div>
                

                


                <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page" href="#">Home</NavLink>
                        </li>
                        

                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#" >About</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/menu" className="nav-link" aria-current="page" href="#" >Menu</NavLink>
                        </li>
                        <li className="nav-item">
                        <CgProfile size="1.5em" color="red"/>              
                         </li>
                        <li className="nav-item">
                        
                            <NavLink to="/login" className="nav-link" aria-current="page" >login</NavLink>

                    
                        </li>
                        <li className="nav-item">
                        <FaShoppingBag size="1em" color="white" align="center" />              
                         </li>
                    </ul>

                </div>
            </div>
        </nav>


    )
}

export default Header
