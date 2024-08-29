import { useEffect } from "react";
import { useState } from "react";
import SliderComponent from "./SliderComponent";
import { NavLink } from "react-bootstrap";

const GeneroComponent = () => {
    const [listaGeneros, setlistaGeneros] = useState([]);

    useEffect(() => {
        const traerGeneros = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDM0YzFlNGUxZmYxODNiODhjMzcwODM3ZTVlNzk2NSIsIm5iZiI6MTcyNDM5NDUyOC4zMDgxMzYsInN1YiI6IjY2YzgyYTY5MDFlYjlhNzQzYWZiN2Q3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z-W6s7k2aLGGYKxSgXnExSwO5zghVlGjguuyzfQG0TI'
                    }
                }
                const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                // console.log(json);
                setlistaGeneros(json.genres);
                // console.log('json '+listaGeneros);
            } catch (e) {
                console.log(e);
            }
        }
        traerGeneros();
    }, []);
    
    return(
        <>
            {
                listaGeneros.map((genero, index) => (
                    <div className="container" key={index}>
                        <h5 className="card-title" style={{color:'white',fontSize:'2rem',marginBottom:'1rem!important'}}>{genero.name}</h5>
                        <NavLink to={`/MovieDetail/${genero.id}`}>
                            <SliderComponent id={genero.id}/>
                        </NavLink>
                    </div>
                ))
            }
        </>
    )
}
export default GeneroComponent;