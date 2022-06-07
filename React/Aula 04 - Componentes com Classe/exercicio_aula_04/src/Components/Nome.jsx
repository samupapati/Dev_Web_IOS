import App from "../App";


class Nome extends App{
    state = {
        nome: 'Carlito'
    }
    render(){
        return (
            <p className='nome'>
                {this.state.nome}
            </p>
        );
    }
}

export default Nome