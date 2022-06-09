import App from '../App'

const Header = () => {
    function click(){
        
    }
    return (
        <div>
            <h1>Minhas Tarefas</h1>
            <button onClick={click} className="botao">
                Adicionar Tarefa
            </button>

        </div>
    );
};

export default Header; 