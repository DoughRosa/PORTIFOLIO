import React from 'react';
import ProjetosStyled from './ProjetosStyled';

interface ProjetosProps {
  children: React.ReactNode;
}

function Projetos({ children }: ProjetosProps) {
  return <ProjetosStyled>{children}</ProjetosStyled>;
}

export default Projetos;