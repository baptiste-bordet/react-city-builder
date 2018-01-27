import React, {Component} from 'react';
import './APropos.css';

class APropos extends Component {


    render() {
        return (

            <div className="a-propos row">

                <div className="">
                    <h5 className="title">Mes activités</h5>

                    <p>Dans le cadre et en parallèle de ma thèse je développe plusieurs activités :</p>

                    <ul>
                        <div className="col-md-6">
                            <li><span className="icon fa-code"/>Programmation (R)</li>
                            <li><span className="icon fa-book"/>Conseil pédagogique</li>
                            <li><span className="icon fa-book"/>Enseignement</li>
                        </div>
                        <div className="col-md-6">
                            <li><span className="icon fa-area-/chart"/>Ecriture</li>
                            <li><span className="icon fa-gradu/ation-cap"/>Data Scientist</li>
                            <li><span className="icon fa-users/"/>Tutorat</li>
                        </div>
                    </ul>

                </div>

            </div>

        );
    }
}

export default APropos;
