import React from 'react'
import './Footer.css'
import {FaTwitter,FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa"

function Footer() {
    return (
        
<footer class="page-footer font-small cyan darken-3 bg-dark mt-auto">

  <div class="container">

    <div class="row">

      
      <div class="col-md-12 py-4">
        <div class="mb-5 flex-center">


          <a class="fb-ic">
           <FaFacebook size="2em" />
          </a>
    
          <a class="tw-ic">
           <FaTwitter size="2em" />
          </a>
        
          <a class="li-ic">
           <FaLinkedin size="2em" />
          </a>
    
          <a class="ins-ic">
            <FaInstagram size="2em" />
          </a>
          
          
        </div>
      </div>
    

    </div>


  </div>



  <div class="footer-copyright text-center py-3">©2021 by Cloud Kitchen. Proudly created with Wix.com
  </div>
  

</footer>

    )
}

export default Footer
