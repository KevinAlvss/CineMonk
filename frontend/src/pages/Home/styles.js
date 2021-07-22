import styled from 'styled-components';
import img from '../../assets/images/bg-cinema.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${img});
  background-position: center;
  background-size: cover;

  > * {
    color : white ;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: SeoulHangang;

  margin: 20px 0 100px 0;

  color: #F0A124;
  font-size: 28px;
  text-align: center;
`;

export const SlogamBox = styled.div`
  margin-bottom: 100px;

  font-size: 60px;
  font-family: ShareTech;

  text-align:center;
`;

export const Button  = styled.button`
  width: 275px;
  height: 208px;
  
  background: linear-gradient(183.2deg, #861B1B 12.34%, #F80000 148.35%);
  box-shadow: 8px 5px 5px 2px rgba(0, 0, 0, 0.25);
  border-radius: 54px;

  border: none;

  font-size: 48px;
  font-family: ShareTech;
  line-height: 54px;
  text-align: center;
  text-transform: uppercase;

  color: #E1E1E1;

  cursor: pointer;

`;
