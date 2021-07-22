import { Box } from './styles'

export default function BoxMovie(props) {
  const movie = props.session;

  return (
      <Box>
        <div className="movie">
          <img src={movie.filme.capa} alt="" />
        </div>
        <div className="movie-info">
          <div className="title"> {movie.filme.nome} </div>
          <div>
            <div className="description">{movie.filme.idiomas} </div>
            <div className="description"> {movie.filme.classificacao} </div>
          </div>
        </div>
      </Box>
  )
}

