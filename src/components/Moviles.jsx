import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaMoviles, DatosTablaMoviles } from '../data/DatosMoviles';
class Moviles extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-site">
        <h1>Moviles</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosTablaMoviles.id}</th>
                    <th>{TitulosTablaMoviles.field1}</th>
                    <th>{TitulosTablaMoviles.field2}</th>
                    <th>{TitulosTablaMoviles.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaMoviles.map((item) => {
                    return (
                      <tr>
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
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={DatosTablaMoviles[2].imagen} />
                <Card.Body>
                  <Card.Title>
                    {DatosTablaMoviles[2].marca} {DatosTablaMoviles[2].marca}
                  </Card.Title>
                  <Card.Text>
                    Modelo: {DatosTablaMoviles[2].modelo}
                    <p />
                    {DatosTablaMoviles[2].descripción}
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

export default Moviles;