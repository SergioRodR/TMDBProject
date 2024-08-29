import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const DetallePelicula = () => {

    const [movieData, setMovieData] = useState(null);
    const { id } = useParams(); //Sirve para leer los parametros de la URL

    useEffect(() => {
        const consultarPeliculas = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDM0YzFlNGUxZmYxODNiODhjMzcwODM3ZTVlNzk2NSIsIm5iZiI6MTcyNDM5NDUyOC4zMDgxMzYsInN1YiI6IjY2YzgyYTY5MDFlYjlhNzQzYWZiN2Q3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z-W6s7k2aLGGYKxSgXnExSwO5zghVlGjguuyzfQG0TI'
                    }
                }
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                console.log(json);
                setMovieData(json);
            } catch (e) {
                console.log(e);
            }
        }
        consultarPeliculas();
    }, []);


    return (
        <>
            <div className="container mt-4">
                <h2 className="text-center">Movie Information</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Title</th>
                                <td>{movieData?.title}</td>
                            </tr>
                            <tr>
                                <th>Tagline</th>
                                <td>{movieData?.tagline}</td>
                            </tr>
                            <tr>
                                <th>Release Date</th>
                                <td>{movieData?.release_date}</td>
                            </tr>
                            <tr>
                                <th>Overview</th>
                                <td>{movieData?.overview}</td>
                            </tr>
                            <tr>
                                <th>Genres</th>
                                <td>
                                    {movieData?.genres.map(genre => genre.name).join(', ')}
                                </td>
                            </tr>
                            <tr>
                                <th>Budget</th>
                                <td>${movieData?.budget.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <th>Revenue</th>
                                <td>${movieData?.revenue.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <th>Popularity</th>
                                <td>{movieData?.popularity}</td>
                            </tr>
                            <tr>
                                <th>Vote Average</th>
                                <td>{movieData?.vote_average}</td>
                            </tr>
                            <tr>
                                <th>Vote Count</th>
                                <td>{movieData?.vote_count}</td>
                            </tr>
                            <tr>
                                <th>Runtime</th>
                                <td>{movieData?.runtime} minutes</td>
                            </tr>
                            <tr>
                                <th>Original Language</th>
                                <td>{movieData?.original_language}</td>
                            </tr>
                            <tr>
                                <th>Production Companies</th>
                                <td>
                                    {movieData?.production_companies.map(company => company.name).join(', ')}
                                </td>
                            </tr>
                            <tr>
                                <th>Homepage</th>
                                <td><a href={movieData?.homepage} target="_blank" rel="noopener noreferrer">{movieData?.homepage}</a></td>
                            </tr>
                            <tr>
                                <th>IMDB ID</th>
                                <td><a href={`https://www.imdb.com/title/${movieData?.imdb_id}`} target="_blank" rel="noopener noreferrer">{movieData?.imdb_id}</a></td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td>{movieData?.status}</td>
                            </tr>
                            <tr>
                                <th>Backdrop</th>
                                <td><img src={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`} alt="Backdrop" className="img-fluid" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default DetallePelicula;