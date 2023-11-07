import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/componentes">Components</Nav.Link>
                <Nav.Link href="/administracion">Administracion</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;