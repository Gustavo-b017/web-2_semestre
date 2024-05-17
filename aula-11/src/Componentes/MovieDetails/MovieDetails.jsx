import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {

    const {id} = useParams()

    const [movie, setMovie] = useState({})

    useEffect(() =>{

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=en-US&page=1`)
        
        .then(response => response.json())
        .then(response => setMovie(response))
    }, [])

    return (  
        <div>
            <h1>bb</h1>
            <p> {movie.title} </p>
        </div>
    );
}

export default MovieDetails;