import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Login = () => {
    return (
        <div>
            <Header/>
        <div className="container2">
            <p className='title-login'>Accès Client</p>
            <form>
                <div className="form-group2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Email" />
                </div>
                <div className="form-group2">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Password" />
                </div>
               
                <button type="submit" className="btn-login">Connexion</button>
                
            </form>
            <div className="container">
                <p ><Link to='/forget'  className='text'>Mot de passe oublié ? </Link></p>
                <p > <Link to='/register'  className='text'>Créer un compte ?</Link></p>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Login;
