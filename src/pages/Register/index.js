import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Container } from "./styles";
// import api from "../../services/api";


class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    loading: false,
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { firstName, lastName,  email, password } = this.state;
    if (!firstName || !lastName || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        this.setState({ loading: true });
        // await api.post("/users", { firstName, lastName,  email, password });        
        // this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      } finally {
        // this.setState({ loading: false });
      }
    }    
  };

  render() {
    return (
      <>
      <Container>
        <Form onSubmit={this.handleSignUp}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome"
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Sobrenome"
            onChange={e => this.setState({ lastName: e.target.value })}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/">Fazer login</Link>                    
        </Form>        
      </Container>
      </>
    );
  }
}

export default SignUp;