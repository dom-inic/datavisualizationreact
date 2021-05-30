import React from "react";
import ChartistGraph from "react-chartist";
import DynamicChart from './barchartthreemonths';
import DoughnutGraph from './doughnutthreemonths';
import LineGraph from './linegraphthreemonths';
import DynamicChartMarch from './march';
import DynamicChartFeb from './February.';
import DynamicChartApril from './april';
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

function TableList() {
  return (
    <>
      <Container fluid>
        <h3>Filtering by Month</h3>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Comparison of total llins against total quantity dispensed</Card.Title>
                <p className="card-category">March Bar chart </p>
              </Card.Header>
              <Card.Body>
                <DynamicChartMarch/>
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
        </Row>
        <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Comparison of total llins against total quantity dispensed</Card.Title>
                <p className="card-category">February Bar chart </p>
              </Card.Header>
              <Card.Body>
                <DynamicChartFeb/>
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
          </Col>,
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Comparison of total llins against total quantity dispensed</Card.Title>
                <p className="card-category">February Bar chart </p>
              </Card.Header>
              <Card.Body>
                <DynamicChartMarch/>
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
      </Container>
    </>
  );
}

export default TableList;
