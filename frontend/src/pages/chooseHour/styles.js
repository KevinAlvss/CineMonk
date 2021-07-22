import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Cartaz = styled.div`
  display: flex;
  flex-direction: column;
  padding: .3em;

  background-color: #AA0A0A;

  width: 17em;

  text-align: center;

  > h4{
    color: #FFCA76;
    font-size: 26px;
    font-family: ShareTech;
    margin: 8px 0;
  }

  > p{
    color: #fff;
    font-size: 20px;
    font-family: ShareTech;

    margin: 5px 0;
  }
`;

export const Hour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: .3em 1em;
  width: 160px;
  height: 150px;
  text-align: center;
  color: #fff;

  background: #AA0A0A;
  box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
  border-radius: 16px;

  margin: .3em;
  
  .sala {
    font-family: SpaceMono;
    font-size: 24px;
    font-weight: bold;
  }

  .hora {
    font-family: Spartan;
    font-size: 40px;
    font-weight: 800;

    display: flex;
    align-items: center;
    justify-content: center;
    }

  .audio {
    font-family: SpaceMono;    
    font-size: 24px;
    font-weight: bold;
  }

`

export const Horarios = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 45%;
`;