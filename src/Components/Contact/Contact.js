import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import {Row, Col ,Container } from 'react-bootstrap';
import facebook from '../../assets/logo/facebook.jpg'
import insta from '../../assets/logo/insta.jfif'
import linkdin from '../../assets/logo/linkdin.png'


import './Contact.css'
function Contact() {
  return (
    <div>
        <Header/>
       
        <Container fluid>
      <Row>
        <Col className="col-8">
        <h3 className='title-contact'>Contactez-nous</h3>
      <div>
      <Row>
        <Col sm={5} style={{ marginLeft: '20px' , marginTop:'20px'}}>
        <div class="form-group">
    <label for="nom">Nom  *</label>
    <input type="text" id="nom" name="nom"/>
  </div>
        </Col>
        <Col sm={5} style={{ marginLeft: '20px' , marginTop:'20px'}}>
        <div class="form-group">
    <label for="nom">Prenom *</label>
    <input type="text" id="nom" name="nom"/>
  </div>
        </Col>
      </Row>
      <Row>
        <Col sm={5} style={{ marginLeft: '20px' , marginTop:'20px'}}>
        <div class="form-group">
    <label for="nom">Société *</label>
    <input type="text" id="nom" name="nom"/>
  </div>
        </Col>
        <Col sm={5} style={{ marginLeft: '20px' , marginTop:'20px'}}>
        <div class="form-group">
    <label for="nom">Téléphone *</label>
    <input type="tel" id="nom" name="nom"/>
  </div>
        </Col>
      </Row>
      <Row>
        <Col sm={5} style={{ marginLeft: '20px' , marginTop:'20px'}}>
        <div class="form-group">
    <label for="nom">Email *</label>
    <input type="mail" id="nom" name="nom"/>
  </div>
        </Col>
        <Col sm={5} style={{ marginLeft: '20px' , marginTop:'20px'}}>
        <div class="form-group">
    <label for="nom">Sujet *</label>
    <input type="text" id="nom" name="nom"/>
  </div>
        </Col>
      </Row>
    
        <Col sm={6} style={{ marginLeft: '20px' , marginTop:'20px'}}>
        <div class="form-group">
    <label for="nom">Message *</label>
    <textarea  type="text" style={{ width: '100%', height:'100%' }}/>
  </div>
        </Col>
        
   
        <div className='container-btn'>
      <button className='btn-envoyer'>Envoyer votre message</button>
      <button className='btn-annuler'>Annuler</button>
      </div>
      
    
    </div>
    
        </Col>
        <Col className="col-2">
          
        <Container fluid className="allpagebg col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ lineHeight: '25px' }}>
        <h3 className="title-contact">Nos coordonnées</h3>
      <Row >
        <Col >
          <h3 className="contact" >Contact local</h3>
          <p className='text'><strong>Adresse :</strong> Route du Gremda km 2.5 Sfax-TUNISIE</p>
          <p className='text'><strong>Email :</strong>contact@ccm-business.com</p>
          <p className='text'><strong>Téléphone :</strong> (+216) 74 268 210 - 29 268 214</p>
          <p className='text'><strong>Fax :</strong> (+216) 74 269 989</p>
        </Col>
        <Col >
          <h3 className="contact">Contact international</h3>
          <p className='text'><strong>Adresse :</strong> Route du Gremda km 2.5 Sfax-TUNISIE</p>
          <p className='text'><strong>Email :</strong> contact@ccm-business.com</p>
          <p className='text'><strong>Téléphone :</strong> (+216) 74 268 210 - 29 268 214</p>
          <p className='text'><strong>Fax :</strong> (+216) 74 269 989</p>
        </Col>
      </Row>
      <h3 className="contact" >Nos réseaux sociaux</h3>
      
       
      <ul className="contact-social">
      
        <li>
          <a  href="https://www.facebook.com/ccm.com.tn/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="" className='img' />
          </a>
        </li>
        
        <li>
          <a href="https://www.instagram.com/ccm.com.tn/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="" className='img'/>
          </a>
        </li>
      
      </ul>
     
      
      </Container>
        </Col>
      </Row>
    </Container>

      <Footer/>

    </div>
  )
}

export default Contact
