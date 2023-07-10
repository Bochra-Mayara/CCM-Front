import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import p1 from '../../assets/collection/p1.jpg'
import './Product.css'
function Product() {
  return (
    <div>
      <Header/>
       <Container fluid className='container-product'>
      <Row>
        <Col className="col-4">
          <div className='sidebar-categories'>
            <h3>Rechercher</h3>
            <div className='form-recherche'>
            <form>
             <input type='text' placeholder='Nom du produit'  className='form-input'/>
             <select className="select" >
                        <option >Sélectionnez une marque</option>
                                                    <option>AMECAP</option>
                                                    <option >AMPRO</option>
                                                    <option >AMS</option>
                                                    <option >ANI</option>
                                                    <option >ARCO</option>
                                                    <option >ARISTON</option>
                                                    <option >ASMACO</option>
                                                    <option >ASTRAL</option>
                                                  
                                            </select>
        
          <button type="submit" className="btn-chercher">Chercher</button>
          
           </form>
           </div>
           <div className='content'>
           <h3>Catégorie</h3>
           <ul>
                                            <li><a href="#" >Assemblage</a></li>
                                            <li><a href="#" >A Bois zinge</a></li>
                                            <li><a href="#" >A Bois Noir</a></li>
                                            <li><a href="#" >Matt</a></li>
                                            <li><a href="#" >Cellulosique</a></li>
                                            <li><a href="#" >Brillant</a></li>
                                            <li><a href="#" >Speciall</a></li>
                                            <li><a href="#" >A-Gaz</a></li>
                                            <li><a href="#" >A Visse</a></li>
                                            <li><a href="#" >Jardin Fil</a></li>
                                            <li><a href="#" >Jardin</a></li>
                                            <li><a href="#" >Gorge</a></li>
                                            <li><a href="#" >Cristal</a></li>
                                            <li><a href="#" >A Gaz-Oxygène</a></li>
                                            <li><a href="#" >Osmoseur</a></li>
                                    </ul>
                                    </div>
         
          </div>
         
        </Col>




        <Col className="col-8">
         <Row>
        <Col className="col-4">
        <img src={p1} className='img-panier'/>
        </Col>
        <Col className="col-8">
          <h3 className='text-title'>Mitigeur Evier Amovilble</h3>
          <div className='réf-text'>
            <h2>Référence :</h2>
            <h2> 4189MEL66</h2>
          </div>

          <div className='réf-text'>
            <h2> Prix :</h2>
         
          </div>
          <div className='réf-text'>
            <h2>Désignation :</h2>
         
          </div>
          <div className='input-form'>
          <label for="nom">Quantité</label>
       <input type="number" id="nom" name="nom"/>
          </div>
          <button className='btn-panier'>Ajouter Au Panier</button>

         
        </Col>
      </Row>
  
        </Col>
      </Row>
    </Container>
    <Footer/>

      
    </div>
  )
}

export default Product
