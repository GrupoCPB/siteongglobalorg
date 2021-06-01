import { logo } from '../../pages/Home/Home_imagens';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

const navbarStyles = {
    backgroundColor: "#F0F5F7",
};

const formStyles = {
    borderRadius: "26px",
    minWidth: "300px",
};

const SearchBar = () => {
    return (
        <>
            <Navbar style={navbarStyles} expand="lg">
                <Navbar.Brand>
                    <Link to="/">
                   
                <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="Global ORG" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Form>
                            <FormControl style={formStyles} type="text" placeholder="Busque vagas de voluntariado ou ONGs" className="mr-sm-2" />
                        </Form>
                    </Nav>

                    <Nav>
                            <Nav.Link>Nossas plataformas</Nav.Link>
                            <Nav.Link href="/cadastro/voluntario">Quero ser voluntário</Nav.Link>
                            <Nav.Link>Quem somos</Nav.Link>
                            <Nav.Link>Para empresas</Nav.Link>
                            <Nav.Link>Sou uma ONG</Nav.Link>
                            <Nav.Link>Entrar</Nav.Link>
                            <Nav.Link>Ajuda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default SearchBar;