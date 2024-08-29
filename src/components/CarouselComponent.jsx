import { Carousel, Container, Row, Col } from 'react-bootstrap';
import '../styles/CarouselComponent.css';
import { useEffect } from "react";
import { useState } from "react";

const CarouselComponent = () => {
    const [listaPeliculasUpcoming, setlistaPeliculasUpcoming] = useState([]);
    const [isCharging, setIsCharging] = useState(true);

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
                const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                console.log(json);
                setlistaPeliculasUpcoming(json.results);
                setIsCharging(false);
            } catch (e) {
                console.log(e);
            }
        }
        consultarPeliculas();
    }, []);

    return (
        <>
            <Container className='marginContainer'>
                <Carousel indicators={false} controls={true} interval={5000}>
                    {
                        isCharging ? (<div className="spinner-border" role="status" >
                            <span className="sr-only"></span>
                        </div>) :
                            (
                                listaPeliculasUpcoming.map((pelicula, index) => (
                                    <Carousel.Item key={index} className='backCarousel'>
                                        <Row className="align-items-center">
                                            <Col xs={12} md={6} className="d-flex justify-content-center">
                                                <img
                                                    className="d-block w-100 effectImg"
                                                    src={`https://image.tmdb.org/t/p/w1280/${pelicula.poster_path}`}
                                                    alt={`Slide ${index + 1}`}
                                                />
                                            </Col>
                                            <Col xs={12} md={6} className="text-center text-md-start">
                                                <h2 className='titleMovie'>{pelicula.title}</h2>
                                                <p className='descMovie'>{pelicula.overview}</p>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                ))
                            )
                    }
                </Carousel>
            </Container >
        </>
    );
}


export default CarouselComponent;
