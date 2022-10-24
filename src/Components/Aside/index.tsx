import React from 'react';
import {
  MdArrowBack,
  MdArrowDownward,
  MdArrowUpward,
  MdDashboard,
  MdExitToApp,
  } from 'react-icons/md'

import {
  Header,
  LogImg,
  Container,
  MenuConatainer,
  MenuItemLink,
  Title,
} from './style';

import logoImg from '../../assets/dollar.png';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt='Logo minha Carteira'></LogImg>
        <Title>Minha Carteira</Title>
      </Header>

      <MenuConatainer>
        <MenuItemLink href='#'>
          <MdDashboard />
          DashBoard
        
        </MenuItemLink>
       
        <MenuItemLink href='#'>
          <MdArrowUpward/>
          Entradas
          </MenuItemLink>
        <MenuItemLink href='#'>
           <MdArrowDownward />
          Saidas</MenuItemLink>
        <MenuItemLink href='#'>
        <MdExitToApp/>
          Sair</MenuItemLink>
      </MenuConatainer>
    </Container>
  );
};

export default Aside;
