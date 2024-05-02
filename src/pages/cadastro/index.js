import React, { Component } from "react";
import { Link } from 'react-router-dom';
import firebase from "../../fireBase.js";
import "../../App.css";

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      senha: "",
      email: "",
      mensagem: "",
      data: ""
    };
    this.obterNome = this.obterNome.bind(this);
    this.obterSobreNome = this.obterSobreNome.bind(this);
    this.obterSenha = this.obterSenha.bind(this);
    this.obterEmail = this.obterEmail.bind(this); 
    this.cadastrar = this.cadastrar.bind(this);
    this.obterData = this.obterData.bind(this);
  }

  async cadastrar() {
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then( async (retorno) => {
         await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            data: this.state.data
         })
      })
      let state = this.state;
      state.mensagem = "Cadastro realizado com sucesso!"; 
      this.setState(state, () => {
        this.setState({
          nome: "",
          sobrenome: "",
          email: "",
          senha:"",
          data: ""
        });
      });
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      let state = this.state;
      state.mensagem = "Ocorreu um erro ao cadastrar. Por favor, tente novamente mais tarde.";
      this.setState(state);
    }
  }
  render() {
    return (
      <div className="container">
        <div>
          <h1>Realize seu cadastro</h1>
        </div>
        <div className="container-forms">
            <input className="forms" type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.obterEmail(e)}></input>
            <input className="forms" type="password" placeholder="Senha" value={this.state.senha} onChange={(e) => this.obterSenha(e)}></input>
        </div>
        <div className="container-forms">
            <input className="forms" type="text" placeholder="Nome" value={this.state.nome} onChange={(e) => this.obterNome(e)}></input>
            <input className="forms" type="text" placeholder="Sobrenome" value={this.state.sobrenome} onChange={(e) => this.obterSobreNome(e)}></input>
        </div>
        <div className="container-data">
            <p className="texto">Data de nascimento:</p>
            <input className="forms" type="date" onChange={(e) => this.obterData(e)}></input>
        </div>
        <div>
          <button className="botao" onClick={this.cadastrar}>Cadastrar</button>
          <Link to="/login">
            <button className="botao">Siga para a tela de login</button>
          </Link>
        </div>
        <h3>{this.state.mensagem}</h3>
      </div>
    );
  }

  obterNome(event) {
    let state = this.state;
    state.nome = event.target.value;
    this.setState(state);
  }

  obterSobreNome(event) {
    let state = this.state;
    state.sobrenome = event.target.value;
    this.setState(state);
  }

  obterSenha(event) {
    let state = this.state;
    state.senha = event.target.value;
    this.setState(state);
  }

  obterEmail(event) {
    let state = this.state;
    state.email = event.target.value;
    this.setState(state);
  }
  obterData(event) {
    let state = this.state;
    state.data = event.target.value;
    this.setState(state);
  }
}

export default Cadastro;
