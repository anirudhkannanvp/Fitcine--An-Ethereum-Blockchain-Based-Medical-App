import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>Here You will find the Client/User Login of Fitcine App</CardHeader>
                <a href="https://pages.razorpay.com/pl_EvSbymz8GdugXq/view">
                <Button
                  className="btn-round"
                  color="primary"
                  type="submit"
                >
                  Donate Via Card, UPI, QR
                </Button>
                </a>
                <a href="http://localhost:3000/campaigns/0x5dDe66676471f48AE6Ea444FaDbAE0C7d15e5958">
                <Button
                  className="btn-round"
                  color="primary"
                  type="submit"
                >
                  Donate Via Ethereum
                </Button>
                </a>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >

                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Icons;
