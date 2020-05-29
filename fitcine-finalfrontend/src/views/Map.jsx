import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col,Button } from "reactstrap";

class Map extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>Here You will find the Organization Login of Fitcine App</CardHeader>
                <CardBody>
                  <div>
                  <a href="http://localhost:3000">
                  <Button
                    className="btn-round"
                    color="primary"
                    type="submit"
                  >
                    Login to Organization/NGO Dashboard
                  </Button>
                  </a>
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

export default Map;
