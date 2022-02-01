import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaPelis, DatosTablaPelis } from '../data/DatosPelis';
class PelisMarvel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: '',
      tituloop: '',
      añop: '',
    };
  }

  eventoclick(item) {
    this.setState({
      imagen: item.imagen,
      tituloop: item.titulo,
      añop: item.año,

    });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Cronología de la Películas y Series del Universo MARVEL</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosTablaPelis.id}</th>
                    <th>{TitulosTablaPelis.field1}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaPelis.map((item) => {
                    return (
                      
                         <tr onClick={() => this.eventoclick(item)}>
                        <td>{item.modelo}</td>
                        <td>{item.marca}</td>
                        <td>{item.so}</td>
                        <td>{item.color}</td>                   
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={2} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.imagen} />
                <Card.Body>
                  <Card.Title>
                    {this.state.modelop}
                    <p />
                    {this.state.marcap}
                  </Card.Title>
                  <Card.Text>
                    {this.state.sop}
                    <p />
                    {this.state.colorp}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PelisMarvel;