import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home">Employee Database</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="insert">insert</Nav.Link>
                        <Nav.Link as={Link} to="display">Display</Nav.Link>
                        <Nav.Link as={Link} to="search">Search</Nav.Link>
                        <Nav.Link as={Link} to="update">Update</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;

