import React from "react";
import ChartistGraph from "react-chartist";
import DynamicChart from './barchartthreemonths';
import DoughnutGraph from './doughnutthreemonths';
import LineGraph from './linegraphthreemonths';
import SimpleMenu from './monthsdrop';
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

function Typography() {
  return (
    <>
      <Container fluid>
        
        <h3>Using different charts</h3>
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

export default Typography;
