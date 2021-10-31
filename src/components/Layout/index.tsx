import React from 'react';
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';
import * as Styled from './styles';

const Layout:React.FC = () => {
  return (
    <Styled.Container>
      <MainHeader/>
      <Aside/>
      <Content/>
    </Styled.Container>
  );
}

export default Layout;