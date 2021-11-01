import React, {useMemo, useState} from 'react';
import * as Styled from './styles';
import emojis from '../../utils/emojis';
import Toggle from '../Toggle'


const MainHeader:React.FC = () => {
  const emoji = useMemo(()=>{
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice]
  },[]);

  return (
    <Styled.Container>
      <Toggle />
      <Styled.Profile>
        <Styled.Welcome>Olá, {emoji}</Styled.Welcome>
        <Styled.UserName>Gustavo Seabra</Styled.UserName>
      </Styled.Profile>
    </Styled.Container>
  );
}

export default MainHeader;