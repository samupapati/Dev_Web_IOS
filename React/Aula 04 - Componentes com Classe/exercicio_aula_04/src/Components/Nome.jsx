import { Component } from "react"

class Nome extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome: 'Joana'
        };
    };


    render (){
        return(
            <div>
                <h1 className="nome">
                    {this.state.nome}
                </h1>
            </div>
        );
    }
}


export default Nome