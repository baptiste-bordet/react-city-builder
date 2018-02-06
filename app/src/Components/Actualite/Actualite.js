import React, {Component} from 'react';
import './Actualite.css';
import photoActualite from '../../assets/photo-actualite.jpg';

class Actualite extends Component {


    render() {
        return (

            <div id="actualites" className="row home-block">

                <div className="">
                    <h2 className="title">Actualité</h2>

                    <div className="col-md-6 col-xs-12">
                    <img src={photoActualite} alt="photoActualite" />
                    </div>

                    <div className="col-md-6 col-xs-12">
                        <div className="titre-article">Apéro sur la plage</div>

                        <p>Un article à propos de jolies filles qui font la fête sur la plage au coucher du soleil à Vina del Mar au Chili. Elles fêtent le début de l'année 2018 entre copines.</p>                        

                    </div>

                </div>
            </div>



        );
    }
}

export default Actualite;
