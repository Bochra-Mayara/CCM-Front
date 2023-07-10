import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Row, Col ,Container } from 'react-bootstrap';
import commerce from '../../assets/logo/commerciaux.jfif'
import ccm from '../../assets/logo/ccm.jfif'
import shop from '../../assets/logo/shop.png'
import './CCM.css'
function CCM() {
  return (
 
      <div>
        <Header/>
        <div className='service-container'>
        <div className='service-title-text' >
            <h3>Qui sommes nous ?</h3>
            <p>« CCM Business », 1ère Société Commerciale Tunisienne Certifiée ISO 9001 est une Société SARL exerçant dans le domaine du commerce en gros de tous les articles de quincaillerie, sanitaire, peinture, équipements ménager, agricoles et industriels.
Elle a été créé en 2009 par son fondateur et gérant MR. MOHAMED DARGUECH, 20 ans après la création de sa première société EDAMO qui exerce le même domaine d’activité mais en détail.</p>
<p>Chez « CCM Business », nous adaptons à votre mode de fonctionnement. </p>
        </div>



        <div className='service-title-text' >
            <h3>Différents moyens pour commander vous sont proposés :</h3>
            
        </div>
  
        <div  className='row'>
          <Row>
            <Col className="col-4">
                <Row>
                <Col><img src={commerce} /></Col>
                 <Col><h6 className='text-img'>Avec nous commerciaux: en bénéficiant de leur connaissance produit et de leurs conseils </h6></Col>
                </Row>
            </Col>





            <Col className="col-4">
            <Row>
                <Col><img src={ccm} /></Col>
                 <Col><h6 className='text-img'>Dans notre siége social: situé dans la route de Gremda km 2.5 Sfax-TUNISIE </h6></Col>
                </Row>
            </Col>



            <Col className="col-4">
            <Row>
                <Col><img src={shop} /></Col>
                 <Col><h6 className='text-img'>Via notre boutique en ligne: vous permettant de commander tous les jours à toute heure. </h6></Col>
                </Row>
            </Col>
          </Row>
        </div>


        
        </div>
        <Footer/>
      
    
    </div>
  )
}

export default CCM
