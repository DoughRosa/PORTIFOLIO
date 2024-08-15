import ImagemStyled from "./ImagemStyled";

interface ImagemProps {
  src: string;
}

function Imagem({src}: ImagemProps) {
  return (
    <ImagemStyled src={src}></ImagemStyled>
  )
};

export default Imagem;