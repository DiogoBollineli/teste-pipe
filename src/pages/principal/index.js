import React,{Component} from "react";
import "../../App.css"
import {Link} from 'react-router-dom'
import firebase from '../../fireBase'

class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome:"",
            sobrenome:"",
            nascimento:""
        }
    }
async componentDidMount(){
    await firebase.auth().onAuthStateChanged(async (usuario) => {
        if(usuario){
            var uid = usuario.uid;
            await firebase.firestore().collection("usuario").doc(uid).get()
            .then((retorno) => {
                this.setState({
                    nome: retorno.data().nome,
                    sobrenome: retorno.data().sobrenome,
                    nascimento: retorno.data().data
                })
            })
        }
    })

}
async sair(){
    try{
        await firebase.auth().signOut();
        //this.props.history.push("/");
    }catch(erro){
        console.error("Erro ao tentar realizar logout", erro);
    }
}

    render(){
        return(
            <div className="container">
                <h3>Nome: {this.state.nome}<br/>Sobrenome: {this.state.sobrenome} <br/> Nascimento: {this.state.nascimento}</h3>
                <div>
                    <Link to="/">
                    <button className="botao" onClick={this.sair}>Sair</button></Link>
                </div>
                
            </div>
        )
    }
}

export default Principal;