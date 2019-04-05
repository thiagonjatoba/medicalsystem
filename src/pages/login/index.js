import React from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import "../../style/Login.css";
import { autenticar } from '../../services/authService'
import Password from 'antd/lib/input/Password';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            password: "",
            MensagemInfo: ""
        };
    }

    render() {
        return <div className="form-signin">
            <img className='logo' src={require('./logo.png')} /><br />
            <br />
            <Input className="inputLogin input" value={this.state.user} placeholder="Usuário" onChange={(e) => { this.onChange(e.target.value, 'user') }} /><br />
            <br />
            <Password className="inputLogin input" value={this.state.password} placeholder="Senha" onChange={(e) => { this.onChange(e.target.value, 'password') }} /><br />
            <br />
            <Button className="btn btnLogin" type="primary" onClick={this.buttonClick}>Entrar</Button><br />
            <div className="info">{this.state.MensagemInfo}</div>
        </div>;
    }

    buttonClick = () => this.validar();

    onChange = (value, key) => this.setState({ [key]: value })

    validar() {
        if (!this.state.user.length > 0 || !this.state.password.length > 0)
            this.setState({ MensagemInfo: "Preencher os campos." })
        else
            autenticar(this.state.user, this.state.password);

    }

    // onChange(value, key) {
    //     this.setState((previousState) => {
    //         return this.setState({ [key]: value })
    //     })
    // }
}