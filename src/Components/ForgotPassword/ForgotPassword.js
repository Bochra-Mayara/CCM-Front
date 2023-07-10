import React from 'react'
import "./ForgotPassword.css";
import { Link } from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function ForgotPassword() {
  return (
    <div>
      <Header/>
    <div className="container-forget">
            <p className='title'>Récupérez votre mot de passe</p>
            <p>Saisissez votre email ci-dessous. Nous vous enverrons un email contenant votre nouveau mot de passe.</p>
            <form>
                <div className="form">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Email" />
                </div>
                <Link to='/reset'>
               <button type="submit"  className='btn-forget'>Valider</button>
               </Link>
               <p ><Link to='/login' className='text-back'>Retour à l'identification</Link></p>
                
            </form>
            
        </div>
        <Footer/>
        </div>
  )
}

export default ForgotPassword
