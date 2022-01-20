import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaMoviles, DatosTablaMoviles } from '../data/DatosMoviles';
class Moviles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: '',
      modelop: '',
      marcap: '',
      sop: '',
      colorp: '',
    };
  }

  eventoclick(item) {
    this.setState({
      imagen: item.imagen,
      modelop: item.modelo,
      marcap: item.marca,
      sop: item.so,
      colorp: item.color,
    });
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

export default Moviles;