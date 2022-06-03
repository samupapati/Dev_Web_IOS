const style1 = {backgroundColor: '#fff1cc', padding: "2%"};
const style2 = {textTransform: 'uppercase', marginTop: 0};
const style3 = {color: '#4a4a4a'};

const Sobre = () => {
    return (
    <article style = {style1}>
        <h2 style = {style2}>Com suas palavras explique o que é React.</h2>
        <p style = {style3}>React é uma biblioteca que utiliza a sintaxe JSX, derivada do Javascript, é utilizado para montar 
            interfaces do usuário ou, em outras palavras, tudo que o usuário vê e interage. 
        </p>
    </article>
    )
};

export default Sobre;
