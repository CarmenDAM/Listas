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
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652954000.jpg" id="img1" alt="primeraImagen" />
 
                        <script>
                        function cambiarImagenJS(){
                          document.getElementById("img1").src="image2.jpg"
                        }
                        
                        </script>

                        <td>{item.marca}</td>

                        <img src="https://media.istockphoto.com/photos/nokia-3310-mobile-phone-picture-id517335694?k=20&m=517335694&s=170667a&w=0&h=OzCMXl2hN4V2j2rHtntzG1xxW_oAwT8wkm7u8Gq6GBw=" id="img2" alt="segundaImagen" />
 
                          <script>
                          function cambiarImagenJS(){
                            document.getElementById("img2").src="image3.jpg"
                          }
                          
                          </script>

                        <td>{item.so}</td>

                        <img src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/157975-phones-review-hands-on-samsung-galaxy-flip-3-review-image1-qgcb9vrlxi.jpg" id="img3" alt="terceraImagen" />
 
                        <script>
                        function cambiarImagenJS(){
                          document.getElementById("img4").src="image4.jpg"
                        }
                        
                        </script>

                        <td>{item.color}</td>

                        <img src="https://img-live.goboo.vip/goods/20210825/1629884730998_7815499.png?imageMogr2/format/webp" id="img1" alt="cuartaImagen" />
 
                        <script>
                        function cambiarImagenJS(){
                          document.getElementById("img5").src="image1.jpg"
                        }
                        
                        </script>
                                              
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
                    {DatosTablaMoviles[2].marca} {DatosTablaMoviles[2].so}
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