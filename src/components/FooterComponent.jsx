import { Container, Row, Col, ListGroup, ListGroupItem, Navbar } from 'react-bootstrap';
import '../styles/FooterComponent.css';

const FooterComponent = () => {
    return (
        <>
            <footer className="bg-dark text-white py-4 mt-5">
                <Container>
                    <Row>
                        <Col xs={12} md={4} className="mb-4">
                            <h5>Sobre Nosotros</h5>
                            <p>Somos una empresa dedicada a ofrecer los mejores productos y servicios en la industria. Contáctanos para más información.</p>
                        </Col>
                        <Col xs={12} md={4} className="mb-4">
                            <h5>Enlaces Rápidos</h5>
                            <ListGroup variant="flush">
                                <ListGroupItem as="a" href="#home" className="bg-dark text-white">Inicio</ListGroupItem>
                                <ListGroupItem as="a" href="#about" className="bg-dark text-white">Sobre Nosotros</ListGroupItem>
                                <ListGroupItem as="a" href="#services" className="bg-dark text-white">Servicios</ListGroupItem>
                                <ListGroupItem as="a" href="#contact" className="bg-dark text-white">Contacto</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col xs={12} md={4} className="mb-4">
                            <h5>Contáctanos</h5>
                            <p><i className="bi bi-envelope"></i> email@dominio.com</p>
                            <p><i className="bi bi-telephone"></i> +123 456 7890</p>
                            <div className="d-flex">
                                <a href="https://facebook.com" className="text-white me-2">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://twitter.com" className="text-white me-2">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="https://instagram.com" className="text-white me-2">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="https://linkedin.com" className="text-white">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="text-center">
                            <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;