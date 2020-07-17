import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Card, Container, Row, Nav, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: {}
    }
  }

  // communication with the python backend to execute commands
  componentDidMount() {
    var url = "http://127.0.0.1:5000/specs/api/data";
    axios
      .get(url)
      .then((res) => {
        this.setState(
          {
            information: res.data
          }
        )
        console.log(this.state.information.System_information.Machine)
      })
      .catch((error) => {
        console.log("Sorry! server is down", "bot_chat");
      });
  }

  render() {
    let details = this.state.information
    return (
      <div className="App">
        <Card>
          <Card.Header>
            <Card.Title>SPECS</Card.Title>
            <Card.Text>Get detailed information about your computer</Card.Text>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">System Information</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Card className="mb-6 info_cards">
                  <Card.Body>
                    <Card.Title>Computer Name</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="mb-6 info_cards">
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="mb-6 info_cards">
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="mb-6 info_cards">
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
