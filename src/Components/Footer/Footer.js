import React from 'react'
import './Footer.css'
import { FaFax } from 'react-icons/fa'
import {AiFillEnvironment, AiFillMail, AiFillPhone} from'react-icons/ai'
import facebook from '../../assets/logo/facebook.jpg'
import insta from '../../assets/logo/insta.jfif'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer' id='Footer'>
        <div className='Newsletter'> 
        <h3>Inscrivez-vous aux Newsletters</h3>
        <p>Avantages et nouveautés en avant-première ! Inscrivez-vous maintenant !</p>
      

    <div class="container-Newsletter ">
      <input placeholder="Votre adresse email" name="email" type="text" value="" className='input-Newsletter'/>
      <button className='btn-Newsletter'>Inscription</button>
    </div>
    <div class="row footer-menu">
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-5 ">
                       
                            <h3 className='title-coodronnées'>Coodronnées de contact</h3>
                            
                                
                            <div className='Icon-text' ><AiFillEnvironment className='AdressIcon'/><p>Route du Gremda km 2.5 Sfax-TUNISIE</p></div>
                                    <div className='Icon-text'><AiFillMail className='AdressIcon'/><p>contact@ccm-business.com</p></div>
                                    <div className='Icon-text'> <AiFillPhone className='AdressIcon'/> <p>(+216) 74 268 210 - 29 268 214</p></div>
                                    <div className='Icon-text'>  <FaFax className='AdressIcon'/><p>(+216) 74 269 989 </p></div>
         
         <ul className='social'>
      
        <li>
          <a href="https://www.facebook.com/ccm.com.tn/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="" className='img' />
          </a>
        </li>
         <li>
          <a href="https://www.instagram.com/ccm.com.tn/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="" className='img'/>
          </a>
        </li>
      
      </ul>

                     
                           
                        
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 footer-full ">
                       
                            <h3 className='title-propos'>A propos</h3>
                            
                                <ul class="footer-list">
                                    <li>
                                       <Link to='/'> <a >Accueil</a></Link>
                                    </li>
                                    <li>
                                    <Link to='/ccm'> <a >Qui sommes nous ?</a></Link>
                                    </li>
                                    <li>
                                        <a >Dernières actualités</a>
                                    </li>
                                    <li>
                                    <Link to='/contact'> <a>Contact</a></Link>
                                    </li>
                                </ul>
                            
                       
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 footer-full">
                        
                            <h3 class="title-compte">Mon compte</h3>
                            
                                <ul class="footer-list">
                                    <li>
                                    <Link to='/register'><a >Inscription</a></Link>
                                    </li>
                                    <li>
                                    <Link to='/login'> <a >Se connecter</a></Link>
                                    </li>
                                    <li>
                                    <Link to='/forget'> <a >Mot de passe oublié</a></Link>
                                    </li>
                                    <li>
                                        <a >Historique</a>
                                    </li>
                                </ul>
                            
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 footer-full">
                       
                            <h3 class="title-navigation">Navigation</h3>
                         
                                <ul class="footer-list">
                                    <li>
                                        <a >Accueil</a>
                                    </li>
                                    <li>
                                        <a>Promotions</a>
                                    </li>
                                    <li>
                                        <a >Livraison</a>
                                    </li>
                                    <li>
                                        <a  href='#'>Catalogues</a>
                                    </li>
                                </ul>
                         
                    </div>
                </div>


                <h3 className='ccm-text'>Copyright  © 2023 CCM-BUSINESS</h3>
   

   
  </div>



        
      
      </div>

  )
}

export default Footer
