import Apresentacao from "./Body/Apresentacao";
import Conteudo from "./Body/Conteudo";
import PageDefaultStyled from "./PageDefaultStyled";

function PageDefault() {

  return (
    <>
    <PageDefaultStyled>
      <Apresentacao/>  
      <Conteudo/>
    </PageDefaultStyled>
    </>
  );
}

export default PageDefault;