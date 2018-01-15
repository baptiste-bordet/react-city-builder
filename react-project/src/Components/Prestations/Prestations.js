import React, {Component} from 'react';
import './Prestations.css';
import prestationsData from './prestationsData.json';

class Prestations extends Component {

    openPopin(prestation, controlIndex) {
        console.log(JSON.stringify(prestation) + ' - index = ' + controlIndex);
    }

    buildRowspan(prestation, controlIndex) {
        let rowspan;

        if (controlIndex == 0) {
            rowspan = prestation.controls.length;
        }

        return rowspan;
    }

    render() {
        return (
            <div id="prestations-bloc" className="container">

                <div className="row">
                    <h1>PRESTATIONS</h1>
                </div>

                <div className="row">

                    <table className="table table-condensed">

                        <thead>
                            <tr>
                                <th colspan="4">Contrôle des équipements de protection collective ventilés</th>
                            </tr>
                        </thead>

                        <tbody>
                            {prestationsData.prestations.map((prestation, index) => {
                                return prestation.controls.map((control, controlIndex) => {
                                    return (
                                        <tr>
                                            <td rowSpan={this.buildRowspan(prestation, controlIndex)} className="name">{prestation.name}</td>
                                            <td>{control.type}</td>
                                            <td onClick={() => this.openPopin(prestation, controlIndex)}>En savoir plus <span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></td>
                                        </tr>
                                    );
                                });
                            })}
                        </tbody>

                    </table>

                </div>

                <div className="row">

                    <table className="table table-condensed prestation-table">
                        <tr>
                            <th>Maintenance préventive</th>
                        </tr>
                        <tr>
                            <td>CONTROL'AIR réalise la maintenance préventive de vos sorbonnes de laboratoire selon les exigences de sécurité fondamentales, décrites dans la norme européenne NF EN 14175-2, afin de  diminuer la probabilité de défaillance ou de dégradation de vos équipements.</td>
                        </tr>
                    </table>

                </div>

                <div className="row">

                    <table className="table table-condensed prestation-table">
                        <tr>
                            <th>Audit aéraulique</th>
                        </tr>
                        <tr>
                            <td>CONTROL'AIR est à votre service pour vous fournir tous les conseils dans les domaines de la ventilation. Nous intervenons sous forme d'audits, de campagnes de mesures et d'aide à la résolution de problématiques de ventilation. Une vision globale des phénomènes rencontrés sur site nous permet de vous apporter des solutions d'amélioration adaptées à vos besoins et à vos contraintes.</td>
                        </tr>
                    </table>

                </div>

                <div className="row">

                    <table className="table table-condensed prestation-table">
                        <tr>
                            <th>Prélèvement de polluants organiques</th>
                        </tr>
                        <tr>
                            <td>La société CONTROL’AIR est capable de réaliser des campagnes de prélèvement de polluants organiques à l’aide de badges de prélèvement passif en vue de déterminer les Valeurs Limites d’Exposition Professionnelle (VLEP). Ces badges individuels de prélèvement passif permettent l'échantillonnage simultané d’une multitude de gaz et vapeurs organiques en accord avec la norme européenne EN 838 :1995.
                                <br/>
                                <br/>
                                <b>Avantages du badge :</b>
                                <ul>
                                    <li>Idéal pour des contrôles occasionnels ou pour des campagnes sur de nombreux salariés simultanément.</li>
                                    <li>Compact et léger, il n’entrave pas l’activité normale du salarié au poste de travail.</li>
                                    <li>Ergonomique, il assure un échantillonnage des plus représentatifs de l’exposition individuelle.</li>
                                </ul>
                            </td>
                        </tr>
                    </table>

                </div>

                <div className="row">

                    <ul>
                        <li className="card-block">
                            <p>Chaque prestation est réalisée sur site et donne lieu à la production d'un rapport de mesure, où sont consignés le descriptif détaillé des contrôles réalisés, les relevés des mesures réalisés ainsi que des préconisations d'utilisation de vos équipements de protection collective.</p>
                        </li>
                        <li className="card-block">
                            <p>CONTROL'AIR s'engage à ce que tout intervenant possède une habilitation UIC aux risques chimiques</p>
                        </li>
                    </ul>

                </div>

            </div>

        );
    }
}

export default Prestations;