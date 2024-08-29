import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SliderComponent.css';
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const SliderComponent = ({ id }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const traerPeliculasPorGeneros = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDM0YzFlNGUxZmYxODNiODhjMzcwODM3ZTVlNzk2NSIsIm5iZiI6MTcyNDM5NDUyOC4zMDgxMzYsInN1YiI6IjY2YzgyYTY5MDFlYjlhNzQzYWZiN2Q3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z-W6s7k2aLGGYKxSgXnExSwO5zghVlGjguuyzfQG0TI'
                    }
                }

                let allResults = [];

                for (let page = 1; page <= 10; page++) {
                    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, options);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const json = await response.json();
                    allResults = allResults.concat(json.results);
                }

                setCards(allResults);
                console.log('json ' + setCards);
            } catch (e) {
                console.log(e);
            }
        }
        traerPeliculasPorGeneros();
    }, []);

    // console.log("entra id " + id);

    const comedyMovies = cards.filter(movie => movie.genre_ids.includes(id));

    const groupedCards = [];
    for (let i = 0; i < comedyMovies.length; i += 4) {
        groupedCards.push(comedyMovies.slice(i, i + 4));
    }
    return (
        <>
            <Container className="mt-5">
                <Carousel>
                    {groupedCards.map((group, index) => (
                        <Carousel.Item key={index}>
                            <Row className="d-flex justify-content-center">
                                {group.map((card) => (
                                    <Col md={3} key={card.id} className="d-flex justify-content-center">
                                        <NavLink to={`/movieDetail/${card.id}`}>
                                            <Card className="bg-image-card text-white">
                                                <Card.Img
                                                    src={`https://image.tmdb.org/t/p/w300/${card.poster_path}`}
                                                    alt={card.title}
                                                    className="card-img"
                                                />
                                                <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                                                    <Card.Title className="text-center">{card.title}</Card.Title>
                                                </Card.ImgOverlay>
                                            </Card>
                                        </NavLink>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </>
    )
}

export default SliderComponent;