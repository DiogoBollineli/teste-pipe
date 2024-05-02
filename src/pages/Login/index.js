import React,{Component} from "react";
import "../../App.css"
import {Link} from 'react-router-dom'
import firebase from '../../fireBase'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
    email:"",
    senha:"",
    mensagem:""
    }
    this.obterEmail = this.obterEmail.bind(this); 
    this.obterSenha = this.obterSenha.bind(this); 
    this.login = this.login.bind(this);
  }

  async login(){
    try{
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() =>{
        window.location.href = "../principal"
      })
    }catch(error){
      console.error("Erro ao realizar login de usuário:", error);
      let state = this.state;
      state.mensagem = "Ocorreu um erro ao realizar login. Por favor, verifique suas credenciais e tente novamente.";
      this.setState(state);
    }
  }
render(){
  return(
    <div className="container">
      <div>
        <h1>Realize seu login</h1>
      </div>
      <div className="container-forms">
        <input className="forms" placeholder="Email" type="email" onChange={(e) => {this.obterEmail(e)}}></input>
        <input className="forms" placeholder="Senha" type="password" onChange={(e) => {this.obterSenha(e)}}></input>
      </div>
      <div>
        <button className="botao" onClick={this.login}>Login</button>
        <Link to="/">
        <button className="botao">Não tem cadastro?</button></Link>
      </div>
      <div>
        <h3>{this.state.mensagem}</h3>
      </div>
    </div>
  )
}
obterEmail(event){
  let state = this.state;
  state.email = event.target.value;
  this.setState(state);
}
obterSenha(event){
  let state = this.state;
  state.senha = event.target.value;
  this.setState(state);
}
}
export default Login;