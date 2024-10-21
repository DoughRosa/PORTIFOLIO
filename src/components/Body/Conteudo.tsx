import Imagem from './Imagem/Imagem';
import Container from './Container/Container';
import ConteudoStyled from './ConteudoStyled';
import mtg from '../../assets/imagens/mtg.jpg';
import xadrez from '../../assets/imagens/xadrez.png';
import showdown from '../../assets/imagens/showdown.jfif';
import js from '../../assets/imagens/javascript.png';
import html from '../../assets/imagens/html5.png';
import css from '../../assets/imagens/css.png';
import typescript from '../../assets/imagens/typescript.png';
import react from '../../assets/imagens/react.png';
import node from '../../assets/imagens/node.png';
import git from '../../assets/imagens/git.png';
import bootstrap from '../../assets/imagens/bootstrap.png';
import sql from '../../assets/imagens/sql.png';
import Projetos from './Projetos/Projetos';
import Gif from './Imagem/Gif';
import psi from './../../assets/imagens/juGif.gif';
import fab from './../../assets/imagens/FabMaGif.gif';
import it from './../../assets/imagens/itGif.gif';
import rick from './../../assets/imagens/rickAndMortyGif.gif';
import growTweeter from './../../assets/imagens/growTweeter.gif';
import dra from './../../assets/imagens/dra.gif';
import pokemon from '../../assets/imagens/pokemon.gif';

function Conteudo() {
  return (
    <ConteudoStyled>
      <Container>
        <h2 style={{ marginTop: '8vh', color: 'rgba(255, 255, 255, 0.87)' }}>Sobre Mim:</h2>
        <p>
          A área da tecnologia sempre esteve entre as minhas áreas de interesse, pois tenho um grande fascínio por
          resolver problemas utilizando lógica e encontrando a melhor solução para questões complexas. Tal encanto me
          fez optar pela área jurídica criminal na adolescência, na qual eu, de forma resumida, preciso entender o
          problema de meu cliente, pensar na melhor solução, traduzir esta solução para uma linguagem técnica e por fim
          apresentar a solução. Buscando entender melhor sobre a função de um desenvolvedor acabei encontrando muitas
          semelhanças que podem ser aproveitadas na forma de pensar e encarar os desafios.
        </p>
        <p>
          Tenho inglês fluente e muita afinidade com jogos de estratégia, como Xadrez, Flesh and Blood e Magic the
          Gathering, este último chegando a jogar mais de uma vez no circuito profissional, o que me proporcionou viajar
          para fora do país e jogar em campeonatos e trabalhar em eventos como interprete. Ter estes jogos como parte da
          minha vida me faz desenvolver o pensamento lógico com frequência. Com minha grande experiência na área
          jurídica, desenvolvi skills como negociação, flexibilidade, adaptabilidade, planejamento, visão sistêmica,
          gerenciamento de tempo, comunicação interpessoal, resolução de problemas, entre outras, habilidades essas
          que acredito que irão agregar valor à área a qual hoje foco minha carreira.
        </p>
        <div style={{ display: 'flex' }}>
          <Imagem src={showdown} />
          <Imagem src={mtg} />
          <Imagem src={xadrez} />
        </div>
      </Container>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 id="habilidades">Hardskills</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="quadrado">
            <img src={html} alt="" style={{ marginTop: '25px' }} />
            <h3>HTML5</h3>
          </div>
          <div className="quadrado">
            <img src={css} alt="" style={{ marginTop: '25px' }} />
            <h3>CSS3</h3>
          </div>
          <div className="quadrado">
            <img src={js} alt="" style={{ marginTop: '25px' }} />
            <h3>JAVASCRIPT</h3>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="quadrado">
            <img src={typescript} alt="" style={{ marginTop: '25px' }} />
            <h3>TYPESCRIPT</h3>
          </div>
          <div className="quadrado">
            <img src={react} alt="" style={{ marginTop: '25px' }} />
            <h3>REACT</h3>
          </div>
          <div className="quadrado">
            <img src={node} alt="" style={{ marginTop: '25px' }} />
            <h3>NODE</h3>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="quadrado">
            <img src={git} alt="" style={{ marginTop: '25px' }} />
            <h3>GIT</h3>
          </div>
          <div className="quadrado">
            <img src={bootstrap} alt="" style={{ marginTop: '25px' }} />
            <h3>BOOTSTRAP</h3>
          </div>
          <div className="quadrado">
            <img src={sql} alt="" style={{ marginTop: '25px' }} />
            <h3>POSTGREE SQL</h3>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Softskills</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="quadrado">
            <h3>COMUNICAÇÃO</h3>
          </div>
          <div className="quadrado">
            <h3>RESILIÊNCIA</h3>
          </div>
          <div className="quadrado">
            <h3 style={{ fontSize: '12px' }}>
              INTELIGÊNCIA <div style={{ display: 'flex', justifyContent: 'center' }}>EMOCIONAL</div>
            </h3>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="quadrado">
            <h3>PENSAMENTO <div style={{ display: 'flex', justifyContent: 'center' }}>CRÍTICO</div></h3>
          </div>
          <div className="quadrado">
            <h3>PENSAMENTO <div style={{ display: 'flex', justifyContent: 'center' }}>CRIATIVO</div></h3>
          </div>
          <div className="quadrado">
            <h3><div style={{ display: 'flex', justifyContent: 'center' }}>SOLUÇÃO</div><div style={{ display: 'flex', justifyContent: 'center' }}>DE</div><div style={{ display: 'flex', justifyContent: 'center' }}>PROBLEMAS</div></h3>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="quadrado">
            <h3 style={{ fontSize: '15px' }}>
              VONTADE <div style={{ display: 'flex', justifyContent: 'center' }}>DE</div> APRENDER
            </h3>
          </div>
          <div className="quadrado">
            <h3>NEGOCIAÇÃO</h3>
          </div>
          <div className="quadrado">
            <h3>LIDERANÇA</h3>
          </div>
        </div>
        <p style={{ marginTop: '3vh' }}>
          Desenvolvo minhas Softskills diariamente, trabalhando como advogado criminalista, com atuação no Tribunal do
          Júri, desenvolvo muito a Comunicação, Resiliência, Inteligência Emocional, Pensamento Criativo e Crítico, bem
          como Negociação.
        </p>
        <p>
          Participando de campeonatos, dentro e fora do Brasil, de Magic: the Gathering, Flesh and Blood e Xadrez,
          preciso colocar em prática o Pensamento Criativo e Crítico. Também nestes jogos, quando atuo na qualidade de
          Juiz tenho a oportunidade de exercer minha Cominicação, Trabalho em Equipe e Liderança.
        </p>
        <p>
          Por fim, minha Vontade de Aprender fica evidente quando após já ter uma profissão estabelecida optei por
          aprender um novo ofício, iniciando do zero na programação e tendo os resultados que podem ser vistos neste
          portifólio.
        </p>
      </Container>
      <Projetos>
        <h1 id="projetos">Projetos</h1>
        <h3>Jucieli Gomes Psi - Landing Page</h3>
        <a target="_blank" href="https://jucieligomespsi.com.br/">
          <Gif src={psi}></Gif>
        </a>
      </Projetos>
      <Projetos>
        <h3>Douglas Rosa Advocacia - Landing Page</h3>
        <a target="_blank" href="https://douglasrosaadvocacia.com">
          <Gif src={dra}></Gif>
        </a>
      </Projetos>
      <Projetos>
        <h3>GrowTweeter</h3>
        <a target="_blank" href="https://growtwitter-18-ed-front.vercel.app/login">
          <Gif src={growTweeter}></Gif>
        </a>
      </Projetos>
      <Projetos>
        <h3>Flesh and Blood MA - Compilador de Streams</h3>
        <a target="_blank" href="https://flesh-and-blood-ma.vercel.app/index.html">
          <Gif src={fab}></Gif>
        </a>
      </Projetos>
      <Projetos>
        <h3>API Pokemon</h3>
        <a target="_blank" href="https://trabalho-final-react-iii.vercel.app/">
          <Gif src={pokemon}></Gif>
        </a>
      </Projetos>
      <Projetos>
        <h3>It, a Coisa - Site para Divulgação do Trailer</h3>
        <a target="_blank" href="https://github.com/DoughRosa/AnimacaoItACoisa/tree/main">
          <Gif src={it}></Gif>
        </a>
      </Projetos>
      <Projetos>
        <h3>API Rick and Morty</h3>
        <a target="_blank" href="https://github.com/DoughRosa/apiRickAndMorty">
          <Gif src={rick}></Gif>
        </a>
      </Projetos>
    </ConteudoStyled>
  );
}

export default Conteudo;
