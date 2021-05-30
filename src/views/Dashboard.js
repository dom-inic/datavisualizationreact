import React from "react";
import ChartistGraph from "react-chartist";
import DynamicChart from './barchartthreemonths';
import DoughnutGraph from './doughnutthreemonths';
import LineGraph from './linegraphthreemonths';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <i class="fas fa-bed"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total LLITNS Distributed</p>
                      {/* <Card.Title as="h4">10,000</Card.Title> */}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  18835 so far
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <i class="fas fa-users"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                    <p className="card-category">MOH 711 LLITNs distributed to ANC clients</p>
                      
                      {/* <Card.Title as="h4">10,000</Card.Title> */}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  10,042 so far
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <i class="fas fa-female"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">MOH 711 LLITN distributed to children under 1 year</p>
                      {/* <Card.Title as="h4">2000</Card.Title> */}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  {/* <i className="far fa-clock-o mr-1"></i> */}
                  8793 so far
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <i class="fas fa-first-aid"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">MOH 743 Rev 2020 LLINs Total Quantity dispensed</p>
                      {/* <Card.Title as="h4"></Card.Title> */}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  {/* <i className="fas fa-redo mr-1"></i> */}
                  6301 so far
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Comparison of total llins against total quantity dispensed</Card.Title>
                <p className="card-category">Bar chart Representation</p>
              </Card.Header>
              <Card.Body>
                <DynamicChart/>
              </Card.Body>
              <Card.Footer>
                {/* <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  MOH 711<i className="fas fa-circle text-danger"></i>
                  MOH 711<i className="fas fa-circle text-warning"></i>
                  MOH 743
                </div> */}
                <hr></hr>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">comparison using a Doughnut</Card.Title>
                <p className="card-category">doughnut</p>
              </Card.Header>
              <Card.Body>
                <DoughnutGraph/>
                {/* <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  MOH 711 <i className="fas fa-circle text-danger"></i>
                  MOH 711<i className="fas fa-circle text-warning"></i>
                  MOH 743
                </div> */}
                <hr></hr>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
          <Col md="10">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Comparison</Card.Title>
                <p className="card-category">Line graph Representation</p>
              </Card.Header>
              <Card.Body>
                <LineGraph/>
              </Card.Body>
              <Card.Footer>
                {/* <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Total llins<i className="fas fa-circle text-danger"></i>
                  Total quantity dispensed
                </div> */}
                <hr></hr>
              </Card.Footer>
            </Card>
          </Col>
      </Container>
    </>
  );
}

export default Dashboard;
