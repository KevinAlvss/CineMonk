import { Link } from "react-router-dom";
import styled from 'styled-components'

const ContainerBig = styled.div`
  padding: 1em 2em;
  height: 90%;
  text-align: center;

  background: #C60A0A;
  box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
  border-radius: 16px;

  margin: .3em;


  & div {
    margin: 0.1em 0em;
  }

  .week {
    font: bold 0.7em SpaceMono;
  }

  .day {
    font: 800 1em Spartan;
  }

  .month {
    font: bold 0.7em SpaceMono;
  }

`


const ContainerSmall = styled.div`
  padding: .3em 1em;
  width: 3.5em;
  text-align: center;


  background: #AA0A0A;
  box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
  border-radius: 16px;

  margin: .3em;


  & div {
    margin: 0.1em 0em;
  }

  
  .week {
    font: bold 0.4em SpaceMono;
  }

  .day {
    font: 800 .6em Spartan;
  }

  .month {
    font: bold 0.4em SpaceMono;
  }

`

export default function Box(props) {
    const Container = props.size === "big" ? ContainerBig : ContainerSmall;
    const session = props.session || { data: '-', diaSemana: '-', dia: '-', mes: '-' }
  
    return (
      <Link to={`/filme/${session.data}`}>
        <Container>
          <div className="week"> {session.diaSemana} </div>
          <div className="day"> {session.dia} </div>
          <div className="month"> {session.mes} </div>
        </Container>
      </Link>
    )
  }
  