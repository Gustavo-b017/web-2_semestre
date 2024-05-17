import { useState, useEffect } from "react";
import MovieCard from "../Componentes/MovieCard/MovieCard";

function Filmes() {

    const [movie, setMovie] = useState([])

    useEffect(() =>{

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=en-US&page=1')
        
        .then(response => response.json())
        .then(response => setMovie(response.results))
    }, [])
    
        return ( 
            <div>
                <h1>Filmes</h1>
                <div className="grid grid-cols-3">

                    {movie.map(filme => (
                        <>
                            <MovieCard key={filme.id} filme={filme} />
                        </>
                    ))}
                </div>
            </div>
        );
    }

export default Filmes;