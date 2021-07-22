import React from 'react';
import Page from '../../components/page';

import { Content, Cartaz, Hour, Horarios } from './styles';

function chooseHour(props) {
  const movie = props.location.state.session;
  const {horarios} = movie;

  return(
      <Page
        description="Selecione o horário e o idioma"
        descriptionOnTop={true}>

        <Content>

            <Cartaz>
                <img src={movie.filme.capa} alt="capa" />
                <h4>{movie.filme.nome}</h4>
                <p>Classificação: {movie.filme.classificacao}</p>
                <p>{movie.filme.idiomas}</p>
            </Cartaz>

            <Horarios>
                {horarios.map(horario =>
                    <Hour>
                        <div className="sala">Sala {horario.sala} </div>
                        <div className="hora"> {horario.hora} </div>
                        <div className="audio"> {horario.audio} </div>
                    </Hour>
                )}
            </Horarios>
            

        </Content>

      </Page>
  );
}

export default chooseHour;