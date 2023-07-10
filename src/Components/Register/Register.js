import React from 'react'
import { Link } from 'react-router-dom';
import "./Register.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const register = () => {
  return (
    <div>
        <Header/>
    <div className="container3">
            <p className='title-register'>Créez votre compte</p>
            <form>
                <div className="form-group">
                    <label htmlFor="entreprise">Nom de l'entreprise:</label>
                    <input type="text" id="entreprise" placeholder="Nom de l'entreprise" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Adresse Email:</label>
                    <input type="email" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="localisation">Localisation:</label>
                    <input type="text" id="localisation" placeholder="Adresse" />
                </div>
                <div className="form-group">
                    <label htmlFor="telephone">Téléphone:</label>
                    <input type="tel" id="telephone" placeholder="Téléphone" />
                </div>
                <div className="form-group">
                    <label htmlFor="numero_fiscale">Numéro Fiscale:</label>
                    <input type="text" id="numero_fiscale" placeholder="Numéro Fiscale" />
                </div>
                <div className="form-group">
                    <label htmlFor="pdf_file">Joindre un fichier PDF:</label>
                    <input type="file" id="pdf_file" />
                </div>
                <Link to='/login'>
                <button type="submit" className="btn-register">Créez mon compte</button>
                </Link>
                 <Link to='/login'>
                <button className='btn-login'> Connexion</button>
                </Link>
            </form>
        </div>
        <Footer/>
        </div>
    );
};

  


export default register

