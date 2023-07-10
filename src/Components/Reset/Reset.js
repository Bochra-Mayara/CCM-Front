import React from 'react'
import "./Reset.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Reset() {
  return (
    <div>
      <Header/>
    <div className="container-reset">
            <p className='title'>Nouveau Password</p>
            <form>
                <div className="form">
                    <label htmlFor="email">Password</label>
                    <input type="email" id="email" placeholder=" Nouveau Password" />
                </div>
                <div className="form">
                    <label htmlFor="email">Confirme Password</label>
                    <input type="email" id="email" placeholder="Nouveau Password" />
                </div>
                
               <button type="submit"  className='btn-reset'>Valider</button>
              
                
            </form>
            </div>
            <Footer/>
        </div>
  )
}

export default Reset