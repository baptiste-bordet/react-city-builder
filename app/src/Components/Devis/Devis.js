import React, {Component} from 'react';
import { Parallax } from 'react-spring';
import { connect } from 'react-redux';
import './Devis.css';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

class Devis extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formStep: 0
        }
    }

    componentDidUpdate() {
        this.devisParallax.scrollTo(this.props.formStep);
    }

    render() {
        const formStyle = {
            backgroundColor: '#273548',
            textAlign: 'center',
            height: '400px',
            display: 'flex',
            padding: '40px'
        };

        return (
            <div id="devis">
                <h2 className="title">DEVIS</h2>

                <h3>Step = {this.props.formStep}</h3>

                <Parallax ref={ref2 => (this.devisParallax = ref2)} pages={2} horizontal={true} scrolling={false}>

                    <Parallax.Layer offset={0.25} factor={0.5} speed={-0.3} style={formStyle}>
                        <div className="form form1">
                            <Form1 />
                        </div>
                    </Parallax.Layer>

                    <Parallax.Layer offset={1.25} factor={0.5} speed={-0.3} style={formStyle}>
                        <div className="form form2">
                            {this.props.formStep == 1 ? <Form2 /> : <Form3 />}
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
