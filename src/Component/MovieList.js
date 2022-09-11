import React, {useState, useEffect} from 'react';

function MovieList() {

    const[movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const res = await fetch(`https://631cb9a51b470e0e120914ce.mockapi.io/api/moviereviews/movies`)
        const data = await res.json()
        setMovies(data)
    };

    const deleteMovie = async (id) => {
        const res = await fetch(`https://631cb9a51b470e0e120914ce.mockapi.io/api/moviereviews/movies/${id}`, {
            method: 'DELETE'
        })
    };

    useEffect(() => {fetchMovies()}, [])

    return (
        <div>
            <h2 className="movieListHeader">Click on Movie Title to Remove From the List</h2>
                    <br></br>
                {movies.map((movie) => {
                    return (
                        <p key={movie.id}>
                           {movie.id} : {movie.title}  <button className="movieList" onClick={() => deleteMovie(movie.id)}>Delete</button>
                        </p>
                    )
                 })}
             
            <br></br>
        </div>
    );

};
export default MovieList;