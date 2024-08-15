import Imagem from './Imagem/Imagem';
import fotoPerfil from '../../assets/imagens/perfil.jpg';
import Container from './Container/Container';
import HeaderPage from '../Header/Links';
import ApresentacaoStyled from './ApresentacaoStyled';
import Footer from '../Footer/Footer';

function Apresentacao() {
  return (
    <ApresentacaoStyled>
      <Container>
        <Imagem src={fotoPerfil}></Imagem>
        <h1 style={{textDecoration: 'underline'}}>DOUGLAS ROSA</h1>
        <h5>Full Stack Web Developer | Javascript | Typescript |NodeJs | React | HTML | CSS</h5>
        <p>
          Advogado migrando para área da tecnologia, atualmente integro o 18º Programa Starter Web Full Stack da
          Growdev, me capacitando através dos conhecimentos das tecnologias aplicadas no mercado, bem como tendo a
          oportunidade de desenvolver projetos reais.
        </p>
        <HeaderPage></HeaderPage>
        <Footer/>
      </Container>
    </ApresentacaoStyled>
  );
}

export default Apresentacao;
