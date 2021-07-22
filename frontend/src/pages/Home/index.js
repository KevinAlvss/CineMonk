import React from 'react';

// estilos
import { Container, LogoBox, SlogamBox, Button } from './styles';

// imagem
import logo from '../../assets/images/ingresso.png'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
        <LogoBox>
            <img src={logo} alt="logo" />
            <h1>CineMonk</h1>
        </LogoBox>

        <SlogamBox>
            O que você quer fazer?
        </SlogamBox>

        <Link to="escolher-filme">
          <Button>
              Comprar Ingresso
          </Button>
        </Link>
    </Container>
  );
}

export default Home;