import { Link } from "react-router-dom";

function MovieCard({filme}) {
    return (  
        <div>
            <p key={filme}> {filme.title} </p>
            <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`}  />
            <Link to={`${filme.id}`}> Saber Mais</Link>
        </div>
    );
}

export default MovieCard;