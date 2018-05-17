import React, {Component} from 'react';
import { Parallax } from 'react-spring';
import { connect } from 'react-redux';
import './Devis.css';
import Form1 from './Form1';

class Devis extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formStep: 0
        }
    }

    componentWillUpdate() {
        this.devisParallax.scrollTo(this.state.formStep);
    }

    render() {
        return (
            <div id="devis">
                <h2 className="title">DEVIS</h2>

                <Parallax ref={ref2 => (this.devisParallax = ref2)} pages={3} horizontal={true} scrolling={false}>

                    <Parallax.Layer offset={0.25} factor={0.5} speed={0}
                                    style={{ backgroundColor: '#252839', textAlign: 'center', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => {
                    }}>
                        <div className="form form1">
                            <Form1 />
                        </div>
                    </Parallax.Layer>

                    <Parallax.Layer offset={1.25} factor={0.5} speed={0}
                                    style={{ backgroundColor: '#252839', textAlign: 'center', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => {
                        this.devisParallax.scrollTo(2);
                    }}>
                        <div className="form form2">
                            <p>form2</p>
                        </div>
                    </Parallax.Layer>

                    <Parallax.Layer offset={2.25} factor={0.5} speed={0}
                                    style={{ backgroundColor: '#252839', textAlign: 'center', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => {
                        this.devisParallax.scrollTo(0);
                    }}>
                        <div className="form form3">
                            <p>form3</p>
                        </div>
                    </Parallax.Layer>

                </Parallax>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    formStep: state.formStep
});

export default connect(mapStateToProps)(Devis);
