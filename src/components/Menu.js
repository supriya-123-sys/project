import React from 'react'
import Header from './Header'
import Footer from './Footer';
import './Menu.css'
import Indian from '../dishes/Indian';
import Chinese from '../dishes/Chinese';
import Italian from '../dishes/Italian';
import Desert from '../dishes/Desert';
import {NavLink, BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function Menu() {
    return (
        <div>
            <div className="cp">
            <Header />
            
            
            <div className="container">
                <div className="row">
                    <div className="col-12 d-lg-inline-flex  p-3 contain">
                        We're not accepting online orders yet. Please contact us to complete the order.
                    </div>

                    <div className="col-md-3 panel d-lg-inline-flex mt-3">
                        Pickup, ASAP (in 15 minutes)
                        <span>Change</span>
                    </div>


                    <nav class="navbar navstyle navbar-expand-lg navbar-light bg-light py-3 mt-3">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>

                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <NavLink class="nav-link" to="/Indian">Indian </NavLink>
                                </li>
                                <Router>
                                    <Switch>
                                        <Route exact path="/Indian" component={Indian} />
                                    </Switch>
                                </Router>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Chinese</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Italian</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Desert</a>
                                </li>
                            </ul>
                        </div>
                    </nav>


                    

                    <div className="d-lg-inline-flex mt-5">
                        <h2>Menu</h2>
                    </div>
                    <div className="d-lg-inline-flex p-3">
                        <p>Served daily</p>
                    </div>
                    
                    <div className="imgstyle">
                        <img src="https://static.wixstatic.com/media/11062b_7daf34b38d874071a1001caa9dde798f~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_1280,h_320,al_c,q_85/11062b_7daf34b38d874071a1001caa9dde798f~mv2_d_5616_3744_s_4_2.jpg" />
                    </div>

                    <Indian />
                     
                            <div className="imgstyle">
                              <img src="https://static.wixstatic.com/media/11062b_ce333d3fd0a941deb7a0ddf8f1ed837b~mv2_d_3046_3782_s_4_2.jpg/v1/fill/w_1280,h_320,al_c,q_85/11062b_ce333d3fd0a941deb7a0ddf8f1ed837b~mv2_d_3046_3782_s_4_2.jpg" />
                            </div>  
                           
                      <Chinese fullWidth/>  
                      <div className="imgstyle">
                          <img src="https://static.wixstatic.com/media/nsplsh_726d646f38723969476677~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_1280,h_320,al_c,q_85/nsplsh_726d646f38723969476677~mv2_d_3024_4032_s_4_2.jpg" />
                          </div> 
                          <Italian /> 
                          <div className="imgstyle">
                              <img src="https://static.wixstatic.com/media/11062b_ffc4bbb9be5945d186188daea72b28ce~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_1280,h_320,al_c,q_85/11062b_ffc4bbb9be5945d186188daea72b28ce~mv2_d_5472_3648_s_4_2.jpg" />
                              </div> 
                              <Desert />
                      

                    </div>

                </div>
                <Footer />
            </div>
            
                
            </div>        
    
        





    )
}

export default Menu
