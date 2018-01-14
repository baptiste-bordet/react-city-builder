import React, {Component} from 'react';
import './Sorbonne.css';

class Sorbonne extends Component {

    render() {
        return (
            <div class="container" id="sorbonne-bloc">

                <div className="row">
                    <h1>LA SORBONNE DE LABORATOIRE</h1>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <p>La sorbonne de laboratoire est une enceinte ventilée en dépression qui aspire l'air ambiant de son local d'implantation et le rejette dans l'atmosphère extérieure au moyen d'un ventilateur. Il s'agit d'un équipement de protection collective destiné à protéger les opérateurs des risques d'inhalation de produits chimiques dangereux.</p>
                        <p>Les vapeurs sont extraites du volume de travail puis sont soit rejetées vers l'extérieur, soit traitées par une filtration (à charbon et/ou à particules).</p>
                        <p>La sorbonne de laboratoire offre la meilleure protection à l'opérateur et à l'environnement de travail.</p>
                        <p>La norme européenne NF EN 14 175 et son extension française NF X 15-206 imposent des contraintes bien précises sur la fabrication des sorbonnes de laboratoire, leurs contrôles et leur entretien.</p>

                    </div>
                </div>

            </div>

        );
    }
}

export default Sorbonne;