import React from 'react';
import { Button } from 'antd';
// import "../../style/Login.css";
import { acessar } from '../../services/service'


export default class Main extends React.Component {
    render() {
        return <div className="form-signin">
            <Button className="btn btnLogin" type="primary" onClick={this.buttonClick}>Acessar</Button><br />
            {/* <div className="info">{this.state.MensagemInfo}</div> */}
        </div>;
    }

    buttonClick = () => this.acessar();

    acessar() {
        acessar();
    }
}