import React, {Component} from 'react';
import Modal from 'react-modal';
import './Prestations.css';
import Table from './Table/Table';
import ArmoireVentile from './Popins/ArmoireVentile';
import BrasAspirant from './Popins/BrasAspirant';
import HotteChimie from './Popins/HotteChimie';
import SorbonneReception from './Popins/SorbonneReception';
import SorbonneRecirculation from './Popins/SorbonneRecirculation';
import SorbonneRoutine from './Popins/SorbonneRoutine';
import prestationsData from './prestationsData.json';

const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(56, 56, 56, 1)'
    },
    content: {
        position: 'absolute',
        top: '100px',
        left: '25%',
        right: '25%',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
    }
};

class Prestations extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(control) {
        this.setState({
            modalIsOpen: true,
            modalContent: control.code
        });
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    buildRowspan(prestation, controlIndex) {
        let rowspan;

        if (controlIndex === 0) {
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
                            <th colSpan="4">Contrôle des équipements de protection collective ventilés</th>
                        </tr>
                        </thead>

                        <tbody>
                        {prestationsData.prestations.map((prestation, index) => {
                            return prestation.controls.map((control, controlIndex) => {
                                return (
                                    <tr key={control.code}>{
                                            controlIndex === 0 ?
                                            <td rowSpan={this.buildRowspan(prestation, controlIndex)}
                                                className="name">{prestation.name}</td>
                                            :
                                            ''
                                        }
                                        <td>{control.type}</td>
                                        <td className="prestation"
                                            onClick={() => this.openModal(control)}>En savoir plus
                                            <span className="glyphicon glyphicon-new-window" aria-hidden="true"></span>
                                        </td>
                                    </tr>
                                );
                            });
                        })}
                        </tbody>

                    </table>

                </div>

                <div className="row">
                    <Table
                        title={'Maintenance préventive'}
                        content={<td>CONTROL'AIR réalise la maintenance préventive de vos sorbonnes de laboratoire selon
                            les exigences de sécurité fondamentales, décrites dans la norme européenne NF EN 14175-2,
                            afin de diminuer la probabilité de défaillance ou de dégradation de vos équipements.</td>}
                    />
                </div>

                <div className="row">
                    <Table
                        title={'Audit aéraulique'}
                        content={<td>CONTROL'AIR est à votre service pour vous fournir tous les conseils dans les
                            domaines de la ventilation. Nous intervenons sous forme d'audits, de campagnes de mesures et
                            d'aide à la résolution de problématiques de ventilation. Une vision globale des phénomènes
                            rencontrés sur site nous permet de vous apporter des solutions d'amélioration adaptées à vos
                            besoins et à vos contraintes.</td>}
                    />
                </div>

                <div className="row">
                    <Table
                        title={'Prélèvement de polluants organiques'}
                        content={<td>La société CONTROL’AIR est capable de réaliser des campagnes de prélèvement de
                            polluants organiques à l’aide de badges de prélèvement passif en vue de déterminer les
                            Valeurs Limites d’Exposition Professionnelle (VLEP). Ces badges individuels de prélèvement
                            passif permettent l'échantillonnage simultané d’une multitude de gaz et vapeurs organiques
                            en accord avec la norme européenne EN 838 :1995.
                            <br/>
                            <br/>
                            <b>Avantages du badge :</b>
                            <ul>
                                <li>Idéal pour des contrôles occasionnels ou pour des campagnes sur de nombreux salariés
                                    simultanément.
                                </li>
                                <li>Compact et léger, il n’entrave pas l’activité normale du salarié au poste de
                                    travail.
                                </li>
                                <li>Ergonomique, il assure un échantillonnage des plus représentatifs de l’exposition
                                    individuelle.
                                </li>
                            </ul>
                        </td>}
                    />
                </div>

                <div className="row">

                    <ul>
                        <li className="card-block">
                            <p>Chaque prestation est réalisée sur site et donne lieu à la production d'un rapport de
                                mesure, où sont consignés le descriptif détaillé des contrôles réalisés, les relevés des
                                mesures réalisés ainsi que des préconisations d'utilisation de vos équipements de
                                protection collective.</p>
                        </li>
                        <li className="card-block">
                            <p>CONTROL'AIR s'engage à ce que tout intervenant possède une habilitation UIC aux risques
                                chimiques</p>
                        </li>
                    </ul>

                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={customStyles}
                    onRequestClose={this.closeModal}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >
                    {{
                        armoireVentilee: (
                            <ArmoireVentile />
                        ),
                        brasAspirant: (
                            <BrasAspirant />
                        ),
                        hotteChimie: (
                            <HotteChimie />
                        ),
                        sorbonneReception: (
                            <SorbonneReception />
                        ),
                        sorbonneRecirculation: (
                            <SorbonneRecirculation />
                        ),
                        sorbonneRoutine: (
                            <SorbonneRoutine />
                        )
                    }[this.state.modalContent]}
                </Modal>

            </div>
        );
    }
}

export default Prestations;