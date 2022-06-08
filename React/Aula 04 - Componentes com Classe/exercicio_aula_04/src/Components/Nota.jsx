import { Component } from "react";

var notasAluno = [5, 8, 6, 9]
var soma = 0

function calcularMedia(){
    for(var i = 0; i < notasAluno.length; i++){
        soma += notasAluno[i]
    }
    return soma = soma / 4
}

export class Nota extends Component {
    render(props) {
        return (
            <div>
                <table>
                    <tr>
                        <th colSpan={'2'}>Notas por bimestre</th>
                    </tr>
                    <tr>
                        <th>B</th>
                        <th>NOTAS</th>
                    </tr>
                    <tr>
                        <td>1º</td>
                        <td>{notasAluno[0]}</td>
                    </tr>
                    <tr>
                        <td>2º</td>
                        <td>{notasAluno[1]}</td>
                    </tr>
                    <tr>
                        <td>3º</td>
                        <td>{notasAluno[2]}</td>
                    </tr>
                    <tr>
                        <td>4º</td>
                        <td>{notasAluno[3]}</td>
                    </tr>
                </table>
                <p>Média:</p>
                <p className="media">{calcularMedia()}</p>
                <p className="aprovado">Aprovado</p>
            </div>
        );
    }
}

export default Nota;