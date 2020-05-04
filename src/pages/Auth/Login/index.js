import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//import Button from '../../../styles/components/Button';
import { Container, SignForm } from "../styles";

import { connect } from "react-redux";

import { IoMdPlay } from "react-icons/io";

import logo from "../../../assets/img/logo.jpg";
import { loginRequest } from "../../../store/ducks/auth";

// import { Container } from './styles';

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired
  };

  state = {
    email: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { loginRequest } = this.props;

    loginRequest(email, password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <div className="img_div">
            <img src={logo} className="img_logo" alt="logo" />
          </div>
          <hr />
          <span>E-MAIL</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />

          <span>SENHA</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />

          {/*<Button size="big" type="submit">Entrar</Button>*/}
          <button
            className="botao"
            type="submit"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div>Login</div>
            <IoMdPlay className="icon" />
          </button>

          <div className="link">
            <Link to="/login/lostpassword">Esqueci minha senha</Link>
          </div>
        </SignForm>
      </Container>
    );
  }
}

// Transforma as actions em props
const mapDispatchToProps = { loginRequest };

export default connect(
  null,
  mapDispatchToProps
)(Login);
