import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ButtonCustom } from '../buttonCustom';

import { TraductorContext } from '../../context/TraductorContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Navegacion = () => {

  const { idioma, setIdioma } = useContext(TraductorContext)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className='navbar-brand'>Home</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='parc' className='nav-link'>Parc</Link>
            <Link to='collserola' className='nav-link'>Collserola</Link>
            <Link to='pantano' className='nav-link'>Pantano</Link>
            <Link to='delta' className='nav-link'>Delta</Link>
            <Link to='montserrat' className='nav-link'>Montserrat</Link>
            <Link to='pedraforca' className='nav-link'>Pedraforca</Link>
            <Link to='parcNatural' className='nav-link'>Parc natural</Link>
            <Link to='llorens' className='nav-link'>Llorenç</Link>
          </Nav>

          <div style={{}}>
            <ButtonCustom fn={() => setIdioma(1)} text='CA' variant={idioma === 1 ? 'secondary' : 'light'} />
            <ButtonCustom fn={() => setIdioma(0)} text='ES' variant={idioma === 0 ? 'secondary' : 'light'} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
