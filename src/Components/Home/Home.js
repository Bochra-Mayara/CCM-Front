import { useState, React } from 'react' 
import './Home.css'
import slider1 from '../../assets/slider/slider1.jpg'
import slider2 from '../../assets/slider/slider2.jpg'
import slider3  from '../../assets/slider/slider3.jpg'
import p5 from '../../assets/collection/p5.png'
import p6 from '../../assets/collection/p6.jpg'
import p7 from '../../assets/collection/p7.png'
import p8 from '../../assets/collection/p8.png'
import delivery from '../../assets/logo/delivery.png'
import satisfied from '../../assets/logo/satisfied.png'
import phone from '../../assets/logo/phone.png'
import security from '../../assets/logo/security.png'
import { Carousel } from 'react-bootstrap';
import astral from '../../assets/clients/c1.png'
import sika from '../../assets/clients/c3.png'
import ams from '../../assets/clients/c5.png'
import redline from '../../assets/clients/c2.png'
import ipalpex from '../../assets/clients/ipalpex.png'
import amecap from '../../assets/clients/amecap.jfif'
import mts from '../../assets/clients/mts.png'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {AiOutlineShoppingCart} from'react-icons/ai'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';




function Home() {
  // const slides = [slider1, slider2, slider3];
  const navigate = useNavigate();

const redirecting = () => {

  navigate('/product');

}
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div >
     <Header/>
    {/* <div  >
    <Carousel pause={false} interval={3000} >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="img-carousel" src={slide} alt={`Slide ${index + 1}`}  />
          
        </Carousel.Item>

      ))}
    </Carousel>
    </div> */}
    <div  >
    
    
       
          <img className="img-carousel" src={slider3} />
          
     

    

    </div>
  

    <div>
      <p className='title-text'>TOP VENTE</p>
      
    
      <div className="card-container">
      <div className="cardVente"   >
      <div className="card-title">
      <h3 >STOCK DISPONIBLE</h3>
      </div>
        <img src={p5} alt="Image 1" className="image-vente" />
        
          <div className="card-text">
            <p>COLIIER FIXATION 40 SICOVIS</p>
            
        </div>
        <div className='ref-prix'>
        <h3>Référence : </h3>
        <h3>Prix de Vente HT :</h3>
        <h3>Prix de Vente TTC :</h3>
        </div>
        <div>
          <button className='button-vente' onClick={handleShow}  > Ajouter au panier</button>
         
          </div>
      </div>

      <Modal show={show} onHide={handleClose} className='Modal'>
        <Modal.Header closeButton>
          <Modal.Title>Merci de sélectionner le modèle à commander</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Modèle</Form.Label>
              <Form.Select aria-label="Default select example">
      <option>PORTE PAPIER TOILETTE</option>
    
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Quantité</Form.Label>
        <Form.Control type="number" placeholder="1" />
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Commander
          </Button>
        </Modal.Footer>
      </Modal>
      

        
        

      <div className="cardVente">
        <div className="card-title">
      <h3 >STOCK DISPONIBLE</h3>
      </div>
        <img src={p6}alt="Image 2" className="image-vente" />
        <div  className="card-text">
          <p>COLIIER FIXATION 40 SICOVIS</p>
        </div>
        <div className='ref-prix'>
        <h3>Référence : </h3>
        <h3>Prix de Vente HT :</h3>
        <h3>Prix de Vente TTC :</h3>
        </div>
        <button className='button-vente'onClick={handleShow}> Ajouter au panier</button>
       
      </div>

      <div className="cardVente">
      <div className="card-title">
      <h3 >STOCK DISPONIBLE</h3>
      </div>
        <img src={p7} alt="Image 3" className="image-vente" />
        <div  className="card-text">
          <p >COLIIER FIXATION 40 SICOVIS</p>
        </div>
        <div className='ref-prix'>
        <h3>Référence : </h3>
        <h3>Prix de Vente HT :</h3>
        <h3>Prix de Vente TTC :</h3>
        </div>
        <button className='button-vente' onClick={handleShow}> Ajouter au panier</button>
        
      </div>

      <div className="cardVente">
      <div className="card-title">
      <h3 >STOCK DISPONIBLE</h3>
      </div>
        <img src={p8} alt="Image 4" className="image-vente" />
        <div  className="card-text">
          <p>COLIIER FIXATION 40 SICOVIS</p>
        </div>
        <div className='ref-prix'>
        <h3>Référence : </h3>
        <h3>Prix de Vente HT :</h3>
        <h3>Prix de Vente TTC :</h3>
        </div>
        <button className='button-vente' onClick={handleShow}> Ajouter au panier</button>
       
      </div>
    </div>
    <div className="card-container">
      <div className="cardVente">
      <div className="card-title">
      <h3 >STOCK DISPONIBLE</h3>
      </div>
        <img src={p5}alt="Image 1" className="image-vente" />
        <div  className="card-text">
          <p >COLIIER FIXATION 40 SICOVIS</p>
        </div>
        <div className='ref-prix'>
        <h3>Référence : </h3>
        <h3>Prix de Vente HT :</h3>
        <h3>Prix de Vente TTC :</h3>
        </div>
        <button className='button-vente' onClick={handleShow}> Ajouter au panier</button>
       
      </div>

      <div className="cardVente">
        <div className="card-title">
      <h3 >STOCK DISPONIBLE</h3>
      </div>
        <img src={p6}alt="Image 2" className="image-vente" />
        <div  className="card-text">
          <p>COLIIER FIXATION 40 SICOVIS</p>
        </div>
        <div className='ref-prix'>
        <h3>Référence : </h3>
        <h3>Prix de Vente HT :</h3>
        <h3>Prix de Vente TTC :</h3>
        </div>
        <button className='button-vente'onClick={handleShow}> Ajouter au panier</button>
   
      </div>

      <div className="cardVente">
      <div className="card-title">
      <h3 >STOCK DISPONIBLE</h3>
      </div>
        <img src={p7} alt="Image 3" className="image-vente" />
        <div  className="card-text">
          <p >COLIIER FIXATION 40 SICOVIS</p>
        </div>
        <div className='ref-prix'>
        <h3>Référence : </h3>
        <h3>Prix de Vente HT :</h3>
        <h3>Prix de Vente TTC :</h3>
        </div>
        <button className='button-vente' onClick={handleShow}> Ajouter au panier</button>
      </div>

      <div className="cardVente">
      <div className="card-title">
      <h3 >STOCK DISPONIBLE</h3>
      </div>
        <img src={p8} alt="Image 4" className="image-vente" />
        <div className="card-text">
          <p >COLIIER FIXATION 40 SICOVIS</p>
        </div>
        <div className='ref-prix'>
        <h3>Référence : </h3>
        <h3>Prix de Vente HT :</h3>
        <h3>Prix de Vente TTC :</h3>
        </div>
        <button className='button-vente' onClick={handleShow}> Ajouter au panier</button>
      </div>
    </div>
     </div>

     <div id="Catégories">

     
     <p className='title-text'>NOS CATÉGORIES</p>
     <div className="cardCategorie-container">
      <div className="card_categorie">
      <div className="cardCategorie-title">
      <h3 >QUINCAILLERIE GÉNÉRALE</h3>
      </div>
      <div className='container-Image-Text'>
        <div className='cardCategorie-text'>
          <h3>Grillage</h3>
          <h3>Roue</h3>
          <h3>Moustiquaire</h3>
          <h3>Détendaire</h3>
          <h3>Echelle</h3>
        </div>
        <img src={p5}alt="Image 1" className="cardCategorie-image" />
      </div>
        
      </div>

      <div className="card_categorie">
      <div className="cardCategorie-title">
      <h3 >QUINCAILLERIE GÉNÉRALE</h3>
      </div>
      <div className='container-Image-Text'>
        <div className='cardCategorie-text'>
          <h3>Grillage</h3>
          <h3>Roue</h3>
          <h3>Moustiquaire</h3>
          <h3>Détendaire</h3>
          <h3>Echelle</h3>
        </div>
        <img src={p5}alt="Image 1" className="cardCategorie-image" />
      </div>
        
      </div>

      <div className="card_categorie">
      <div className="cardCategorie-title">
      <h3 >QUINCAILLERIE GÉNÉRALE</h3>
      </div>
      <div className='container-Image-Text'>
        <div className='cardCategorie-text'>
          <h3>Grillage</h3>
          <h3>Roue</h3>
          <h3>Moustiquaire</h3>
          <h3>Détendaire</h3>
          <h3>Echelle</h3>
        </div>
        <img src={p5}alt="Image 1" className="cardCategorie-image" />
      </div>
        
      </div>

      <div className="card_categorie">
      <div className="cardCategorie-title">
      <h3 >QUINCAILLERIE GÉNÉRALE</h3>
      </div>
      <div className='container-Image-Text'>
        <div className='cardCategorie-text'>
          <h3>Grillage</h3>
          <h3>Roue</h3>
          <h3>Moustiquaire</h3>
          <h3>Détendaire</h3>
          <h3>Echelle</h3>
        </div>
        <img src={p5}alt="Image 1" className="cardCategorie-image" />
      </div>
        
      </div>
      </div>
    </div>



    <div id="Services">
    <p className='titleSevice-text'>NOS SERVICES</p>
    <div className='sevice-container'>
      <div className='image-text-service'>
        <Link to='/service'>
        <img  src={delivery} className='imag-delivery'/>
        </Link>
        <p className='text-delivery'>Livraison rapide</p>
       

      </div>
      <div className='image-text-service'>
      <Link to='/service'>
        <img  src={satisfied} className='imag-satisfied'/>
        </Link>
        <p className='text1'>Satisfait ou Remboursé</p>
        

      </div>
      <div className='image-text-service'>
      <Link to='/service'>
        <img  src={security} className='imag-security'/>
        </Link>
        <p className='text1'>Paiement Sécurisé</p>
        

      </div>
      <div className='image-text-service'>
      <Link to='/service'>
        <img  src={phone} className='imag-phone'/>
        </Link>
        <p className='text1'>Service Clientèle </p>
        

      </div>

      

    </div>
    </div>


    <div>
      <p className='titlePartenaire-text'>NOS PARTENAIRES</p>
      <div className='partenaire-container'>
     
      <div className='imageContainer'>
        <img  src={astral} className='imag-partenaire'/>
       
        

      </div>
      <div className='imageContainer'>
        <img  src={sika} className='imag-partenaire'/>
        
        

      </div>
      <div className='imageContainer'>
        <img  src={ams} className='imag-partenaire'/>
      
        

      </div>
      <div className='imageContainer'>
        <img  src={redline} className='imag-partenaire'/>
      
      </div>
      <div className='imageContainer'>
        <img  src={ipalpex} className='imag-partenaire1'/>
      
      </div>
      <div className='imageContainer'>
        <img  src={amecap} className='imag-partenaire1'/>
      
      </div>
      <div className='imageContainer'>
        <img  src={mts} className='imag-partenaire1'/>
      
      </div>
     

      

    </div>
    </div>




    <Footer />
     
   
     </div>
  )
}

export default Home
