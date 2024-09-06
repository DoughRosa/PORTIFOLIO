import FooterStyled from './FooterStyled';
import github from '../../assets/imagens/github.png';
import instagram from '../../assets/imagens/instagram.png';
import linkedin from '../../assets/imagens/linkedin.png';
import whatsapp from '../../assets/imagens/whatsapp.png';

function Footer() {
  return (
    <FooterStyled>
      <a target="_Blank" href="https://www.linkedin.com/in/douglasrosadasilva/">
        <img className="icones" style={{ margin: '10px' }} src={linkedin} alt="" />
      </a>
      <a target="_Blank" href="https://github.com/DoughRosa">
        <img className="icones" style={{ margin: '10px' }} src={github} alt="" />
      </a>
      <a target="_Blank" href="https://www.instagram.com/dough_rosa/">
        <img className="icones" style={{ margin: '10px' }} src={instagram} alt="" />
      </a>
      <a target="_Blank" href="https://wa.me/5551999592443">
        <img className="icones" style={{ margin: '10px' }} src={whatsapp} alt="" />
      </a>
    </FooterStyled>
  );
}

export default Footer;
