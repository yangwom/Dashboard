import React, { useMemo } from 'react';

import { Container, Profile, Welcome, UserName } from './styles';
import emojiArray from '../../utils/emojis';
import Toogle from '../Toggle'
const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojiArray.length);

    return emojiArray[indice];
  }, []);

  return (
    <Container>
      <Toogle />
             
      <Profile>
        <Welcome>Ola, {emoji}</Welcome>
        <UserName>Yang wom</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
