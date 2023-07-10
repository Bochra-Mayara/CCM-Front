import React, { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaBars } from "react-icons/fa";
import { links,} from "./nav";
import './Header.css'
import Logo from '../../assets/logo/CCM1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { RiSearchLine } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import { BsArrowDown } from 'react-icons/bs';
import { IoIosArrowForward} from 'react-icons/io';

import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserEdit } from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs'
import {AiOutlineShoppingCart} from'react-icons/ai'
import {PiListFill} from'react-icons/pi'
import { NavLink } from 'react-router-dom'
import acceuil from '../../assets/slider/acceuil.jpg'
import {Row, Col} from 'react-bootstrap';

import { Link } from 'react-router-dom'
function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <div>
       <div className="text-top-header">
          <p>Adresse: Route de Gremda km 2.5 Sfax(Tunisie)</p>
          <p>Tel: (+216) 74 268 210 - 29 268 214</p>
          <p>Fax: (+216) 74 269 989</p>
         </div>
        <p className='text-center'>« CCM Business », 1ère Société Commerciale Tunisienne Certifiée ISO 900</p>
        
      <div  className="header-title">
        <Row>
          <Col className="col-2">
      <img src={Logo} className='logoCCM'/>
      </Col>
      <Col className="col-5 top-search1 " >
      <div class="container-recherche ">
        
      <input placeholder="Chercher un produit, une marque ou une catégorie"  type="text" className='input-recherche-product'/>
      <button className='btn-search'>Rechercher</button>
    </div>
    
  </Col>

    <Col className=" col-1 Item-logo-text">
    


    
      < BsFillPersonFill className="icon" onClick={handleShow} />
      <Link to='/product'>
      < AiOutlineShoppingCart className="icon" />
      </Link>
     
    
      <Modal show={show} onHide={handleClose} className='Modal'>
        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
     
    
      

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" />
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="btn-text-modal">
       
          <Button variant="danger" onClick={handleClose} className='btn-connexion'>
            
            Connexion
            
          </Button>
         
          <Link to='/register'>
          <Button variant="dark" onClick={handleClose} className='btn-connexion'>
          Créer un compte
          </Button>
          </Link>
        
        </Modal.Footer>
       
      </Modal>

    

    
      </Col>
      </Row>
    </div>

   
   
    {/* <Dropdown>
    <FaUserEdit className='icon_drop' />
      <Dropdown.Toggle as="span">
         Conseils et services
      </Dropdown.Toggle>

      <Dropdown.Menu lassName="dropdown">
        <Dropdown.Item className='Item'>Option 1</Dropdown.Item>
        <Dropdown.Item className='Item'>Option 2</Dropdown.Item>
        <Dropdown.Item className='Item'>Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <div className="icon-with-text">
      < BsFillPersonFill className='icon'/>
      <p className="text-compte"><Link to='/login' >Compte</Link></p>
    </div>

    <div className="iconPanier-with-text">
      < AiOutlineShoppingCart className='icon-panier'/>
      <p className="text-panier">Panier</p>
    </div> */}
    
    <nav>
     

    
   
      <div className="nav-center">
        <div className="icon-All-product">
       
          
          <PiListFill className="icon-list"/>
          <h3>NOS PRODUITS</h3>
        
     
         

          <div className="link-product">
            <ul>
              <li className="child">
                <a href="#">VIS</a>
                <ul className="second-list">
                  <li><a href="">Assemblage</a></li>
                  <li><a href=""> A Bois zinge</a></li>
                  <li><a href="">A Bois Noir</a></li>
                  
                </ul>
              </li>
              <li className="child">
                <a href="#" >VERNIS</a>
                <ul className="second-list">
                  <li><a href="">Matt</a></li>
                  <li><a href=""> Cellulosique</a></li>
                  <li><a href="">Brillant</a></li>
                  <li><a href="">Autres</a></li>
                  
                </ul>
                
              </li>
              <li className="child">
                <a href="#" >VANNE</a>
                <ul className="second-list">
                  <li><a href="">Speciall</a></li>
                  <li><a href="">A-Gaz</a></li>
                  <li><a href="">A Visse</a></li>
                 
                  
                </ul>
              </li>


              <li className="child">
                <a href="#" >TUYAUX</a>
                <ul className="second-list">
                  <li><a href="">Jardin Fil</a></li>
                  <li><a href="">Jardin</a></li>
                  <li><a href="">Gorge</a></li>
                  <li><a href="">Cristal</a></li>
                  <li><a href="">A Gaz-Oxygène</a></li>
                  
                </ul>
              </li>


              <li className="child">
                <a href="#" >TRAITEMENT D'EAU</a>
                <ul className="second-list">
                  <li><a href="">Osmoseur</a></li>
                  <li><a href="">Filtre</a></li>
                  <li><a href="">Cartouche Filtre</a></li>
                  <li><a href="">Adourcisseur</a></li>
                  
                </ul>
              </li>


              <li className="child">
                <a href="#" >TOURNE VIS</a>
                <ul className="second-list">
                  <li><a href="">Jeu</a></li>
                  <li><a href="">FR</a></li>
                  <li><a href="">AM</a></li>
                  
                  
                </ul>
              </li>



              <li className="child">
                <a href="#" >TIREFON</a>
                <ul className="second-list">
                  <li><a href="">Tirefon</a></li>
                 
                  
                </ul>
              </li>
            </ul>

          </div>

         
        </div>




        <div className="nav-header">
           
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
       
      </div>
    </nav>
    </div>
  )
}

export default Header
