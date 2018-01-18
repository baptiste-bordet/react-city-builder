import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <div id="footer-bloc">
                
                <a data-toggle="collapse" href="#mentionsLegalesCollapse" aria-expanded="false" aria-controls="mentionsLegalesCollapse">Mentions légales</a>
                <div className="collapse" id="mentionsLegalesCollapse">

                    <div className="well">
                        <p>Raison sociale : CONTROL'AIR<br/>
                            Forme juridique : SARL<br/>
                            Adresse de l’établissement : 46 allée des Coteaux, 93340 LE RAINCY<br/>
                            Capital social : 8000€</p>

                        <p>contact@control-air.fr ; 06.50.50.66.57 ou 06.58.45.89.92</p>

                        <p>Numéro d'inscription au registre du commerce et des sociétés (RCS) :<br/>
                            822 980 744 R.C.S. Bobigny</p>

                        <p>N°TVA Intracommunautaire : FR80822980744</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;