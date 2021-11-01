import styled from 'styled-components';

export const Container = styled.div`
  grid-area:AS;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  padding-left:20px;
  border-right: 1px solid ${props=> props.theme.colors.gray};
`;

export const Header = styled.header`
  display:flex;
  align-items: center;
  height: 70px;
`

export const LogoImg = styled.img`
  height: 40px;
`

export const Title = styled.h3`
  color:${props => props.theme.colors.white};
  margin-left:10px;
`

export const MenuContainer = styled.nav`
  margin-top:50px;
  display: flex;
  flex-direction: column;
`

export const MenuItemLink = styled.a`
  color: ${props => props.theme.colors.info};
  transition: color .3s;
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  svg{
    margin-right: 10px;
    font-size:20px;
  }

  &:hover{
    color:${props=>props.theme.colors.gray};
  }
`