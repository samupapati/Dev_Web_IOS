import { Component } from "react";
import PropTypes from 'prop-types';

var notasAluno = [5, 8, 6, 9]
var soma = 0

function calcularMedia(){
    for(var i = 0; i < notasAluno.length; i++){
        soma += notasAluno[i]
    }
    return soma = soma / 4
}

export class Nota extends Component {
    render() {
        return (
            <div>
               Nota: {calcularMedia()}
            </div>
        );
    }
}

export default Nota;