import React, {Component} from 'react';
import './Activites.css';

class Activites extends Component {


    render() {
        return (

            <div id="activites" className="row home-block">

                <div>
                    <h2 className="title">Mes activités</h2>

                    <p>Dans le cadre et en parallèle de ma thèse je développe plusieurs activités :</p>

                    <ul>
                        <div className="col-md-6">
                            <li><i className="fa fa-code"/>Programmation (R)</li>
                            <li><i className="fa fa-book"/>Conseil pédagogique</li>
                            <li><i className="fa fa-book"/>Enseignement</li>
                        </div>
                        <div className="col-md-6">
                            <li><i className="fa fa-area-chart"/>Ecriture</li>
                            <li><i className="fa fa-graduation-cap"/>Data Scientist</li>
                            <li><i className="fa fa-users"/>Tutorat</li>
                        </div>
                    </ul>

                </div>

            </div>

        );
    }
}

export default Activites;
