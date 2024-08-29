
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBarComponent = () => {
    const style = {
        backgroundColor: 'black !important'
    }
    return (
        <>
            <Navbar bg="dark" expand="lg" className='navbar-dark' style={style}>
                <Container>
                    <Navbar.Brand href="#home">MovieWorld</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="#about">Catalogo</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarComponent;