import propTypes from 'prop-types'

const DarBoasVindas = (props) => {
    return (
    <section style={{backgroundColor: '#ffe7a3', padding: "2%"}}>
        <h1 style={{textTransform: 'uppercase'}}>Olá {props.nome}! Seja bem vindo!</h1>
        <p style={{color: '#4a4a4a'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, tempore rem. Dignissimos, ducimus cupiditate animi hic qui soluta magnam numquam sit eos placeat fugit dolor, molestias, consectetur cumque earum ab.0</p>
    </section>
    )
};

DarBoasVindas.defaultProps = {
    nome: window.prompt('Escreva seu nome')
};

DarBoasVindas.propTypes = {
   nome: propTypes.string
}

export default DarBoasVindas;