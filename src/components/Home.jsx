import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({ user: 'Pepito', password: '1234' });
  }

  render() {
    if (
      this.state !== null &&
      this.state.user !== null &&
      this.state.user !== ''
    ) {
      return (
        <div className="main-site">
          <h1>Bienvenido {this.state.user}</h1>
        </div>
      );
    } else {
      return (
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Usuario" />
              <Form.Text className="text-muted">
                Introduce tu email porfavor
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordar contraseña" />
            </Form.Group>
            <Button variant="primary" type="button" onClick={this.login}>
              Login
            </Button>
          </Form>
        </Container>
      );
    }
  }
}

export default Home;