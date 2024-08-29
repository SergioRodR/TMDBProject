import { Card, Row, Col, Container } from 'react-bootstrap';
import '../styles/CardsComponent.css';

const CardsComponent = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    {/* Primera card */}
                    <Col md={4}>
                        <Card className="bg-image-card text-white">
                            <Card.Img
                                src="https://via.placeholder.com/800x400"
                                alt="Card background"
                                className="card-img"
                            />
                            <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                                <Card.Title className="text-center">Texto en Card 1</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                    {/* Segunda card */}
                    <Col md={4}>
                        <Card className="bg-image-card text-white">
                            <Card.Img
                                src="https://via.placeholder.com/800x400"
                                alt="Card background"
                                className="card-img"
                            />
                            <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                                <Card.Title className="text-center">Texto en Card 2</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                    {/* Tercera card */}
                    <Col md={4}>
                        <Card className="bg-image-card text-white">
                            <Card.Img
                                src="https://via.placeholder.com/800x400"
                                alt="Card background"
                                className="card-img"
                            />
                            <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                                <Card.Title className="text-center">Texto en Card 3</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CardsComponent;