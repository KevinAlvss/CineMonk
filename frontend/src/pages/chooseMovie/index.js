import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

import PageContainer from '../../components/page';
import BoxMovie from '../../components/boxMovie';

import { Content } from './styled'

import SessionService from '../../services/sessionService';
const sessionService = new SessionService();

export default function ChooseMovie(props) {
  const { data } = useParams();
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function loadMovies() {
      let r = await sessionService.listMovies(data);
      
      setMovies(r);
    }
    loadMovies();
  },[data])

  return (
    <PageContainer 
      description="Selecione o filme que deseja assistir"
      descriptionOnTop={true}> 
      <Content>
          {movies.map(session =>
            <Link to={{
              pathname: "/horario",
              state: {
                session
              }  
            }}>
              <BoxMovie session={session} />
            </Link>
          )}
      </Content>
    </PageContainer>
  )
}
