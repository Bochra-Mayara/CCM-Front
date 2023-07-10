import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Service.css'
function Service() {
  return (
    <div>
        <Header/>
        <div className='service-container'>
        <div className='service-title-text'  >
            <h3>Livraison Rapide</h3>
            <p>Les colis sont généralement expédiés dans un délai de 2 jours après réception du paiment. Ils sont expédiés via UPS avec un numéro de suivi et rémis sans signature.Les colis peuvent également etre expédiés via UPS Extra et remis contre signature.Veuillez nous contacter avant de choisir ce mode du livraison, car il induit des frais supplémentaires.Quel que soit le mode de livaison choisi, nous vous envoyons un lien pour suivre votre colis en ligne.  </p>
        </div>


        <div  className='service-title-text' >
            <h3>Satisfait ou Remboursé</h3>
            <p>Les frais d'éxpédition incluent les frais de préparation et l'emballage ainsi que les ffrais de port. Les frais de préparations sont fixes, tandis que les frais  de trasport varient selon le poids total  du colis . Nous vous recommandons  de regrouper tous vos articles dans une seule commande. Nous ne pouvons regrouper deux commandes placées séparément et des frais d'expédition s'appliquent à chacune d'entre elles. Votre colis  est expédié à vos propres risques, mais une attention particulière est portée  aus objets fragiles. </p>
        </div>

        <div  className='service-title-text' >
            <h3>Paiement Sécurisé </h3>
            <p>Les dimensions des boites sont appropriées et vos articles sont correctement protégés. </p>
        </div>


        <div  className='service-title-text' >
            <h3>Service Clientèle </h3>
            <p>Les dimensions des boites sont appropriées et vos articles sont correctement protégés. </p>
        </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Service
