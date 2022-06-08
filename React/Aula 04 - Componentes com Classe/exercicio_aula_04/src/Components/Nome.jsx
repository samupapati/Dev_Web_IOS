import { Component } from "react"

class Nome extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome: 'Samuel'
        };
    };


    render (){
        return(
            <div>
                <p>
                    Aluno:
                </p>
                <p>
                     {this.state.nome}
                </p>
            </div>
        );
    }
}


export default Nome