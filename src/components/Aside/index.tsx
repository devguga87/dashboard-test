import React from 'react';
import logoImg from '../../assets/logo.svg';
import * as Styled from './styles'
import { MdDashboard, MdArrowUpward, MdArrowDownward, MdExitToApp} from 'react-icons/md';

const Aside: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.LogoImg src={logoImg} alt="Logo minha carteira" />
        <Styled.Title>Minha Carteira</Styled.Title>
      </Styled.Header>

      <Styled.MenuContainer>
        <Styled.MenuItemLink href='# '>
          <MdDashboard />
          Dashboard
        </Styled.MenuItemLink>

        <Styled.MenuItemLink href='# '>
          <MdArrowUpward />
          Entradas
        </Styled.MenuItemLink>

        <Styled.MenuItemLink href='# '>
          <MdArrowDownward/>
          Saídas
        </Styled.MenuItemLink>

        <Styled.MenuItemLink href='# '>
          <MdExitToApp/>
          Sair
        </Styled.MenuItemLink>

      </Styled.MenuContainer>
      
    </Styled.Container>
  )
}

export default Aside;