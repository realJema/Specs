import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Card, Row, Col, Tabs, Tab, ProgressBar, CardImg} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import data from './backend/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  // communication with the python backend to execute commands
  componentDidMount() {
    var url = "http://127.0.0.1:5000/specs/api/data";
    axios
      .get(url)
      .then((res) => {
      })
      .catch((error) => {
        console.log("Sorry! server is down", "bot_chat");
        this.setState({
          error: true,
        })
      });
  }

  render() {
    return (
      <div className="App">
        <div className="header info_container">
          <h3>SPECS</h3>
          <p>Get detailed information about your computer</p>
        </div>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="the_tabs info_container"
        >
          <Tab eventKey="home" title="System Information">
            <Card.Body>
              <Row>
                <Col>
                  <Card className="mb-6 info_cards">
                    <Card.Body>
                      <Card.Title>System</Card.Title>
                      <Card.Text>
                        {data.System_information.System} -{" "}
                        {data.System_information.Machine}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="mb-6 info_cards">
                    <Card.Body>
                      <Card.Title>Computer Name</Card.Title>
                      <Card.Text>{data.System_information.Node_name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="mb-6 info_cards">
                    <Row>
                      <Col>
                        <Card.Body>
                          <Card.Title>System Version</Card.Title>
                          <Card.Text>
                            {data.System_information.Version}
                          </Card.Text>
                        </Card.Body>
                      </Col>
                      <Col className="images">
                        <CardImg src={require("./assets/win10.png")} />
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  <Card className="mb-6 info_cards">
                    <Card.Body>
                      <Card.Title>Processor</Card.Title>
                      <Card.Text>{data.System_information.Processor}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Tab>
          <Tab eventKey="cpu" title="CPU">
            <Card.Body>
              <Row>
                <Col>
                  <Card className="mb-6 info_cards">
                    <Card.Body>
                      <Card.Title>Physical Cores</Card.Title>
                      <Card.Text>{data.CPU_info.Physical_cores}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="mb-6 info_cards">
                    <Card.Body>
                      <Card.Title>Total Cores</Card.Title>
                      <Card.Text>{data.CPU_info.Total_cores}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="mb-6 info_cards">
                    <Card.Body>
                      <Card.Title>Frequency</Card.Title>
                      <Card.Text>
                        Max - {data.CPU_info.Max_Frequency} Mhz
                        <br />
                        Min - {data.CPU_info.Min_Frequency} Mhz
                        <br />
                        Current - {data.CPU_info.Current_Frequency} Mhz
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="mb-6 info_cards">
                    <Card.Body>
                      <Card.Title>Usage</Card.Title>
                      <Card.Text>{data.CPU_info.Usage.Total}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Tab>
          <Tab eventKey="ram" title="Ram">
            <Card.Body>
              <Row>
                <Col>
                  <Card className="mb-12 info_cards">
                    <Card.Body>
                      <Card.Title>Main</Card.Title>
                      <Card.Text>
                        Total - {data.Ram.Total}
                        <br />
                        Available - {data.Ram.Available}
                        <br />
                        Used - {data.Ram.Used}
                        <br />
                        Percentage - {data.Ram.Percentage}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="mb-12 info_cards">
                    <Card.Body>
                      <Card.Title>Swap</Card.Title>
                      <Card.Text>
                        Total - {data.Ram_swap.Total}
                        <br />
                        Available - {data.Ram_swap.Free}
                        <br />
                        Used - {data.Ram_swap.Used}
                        <br />
                        Percentage - {data.Ram_swap.Percentage}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Tab>
          <Tab eventKey="memory" title="Memory">
            <Card.Body>
              <Row>
                <Col>
                  <Card className="mb-12 info_cards">
                    <Card.Body>
                      <Card.Title>
                        Drive {data["Partitions"][0]["name"]}
                      </Card.Title>
                      <Card.Text>
                        <ProgressBar
                          animated
                          now={data["Partitions"][0]["Percentage"]}
                          label={data["Partitions"][0]["Percentage"]}
                        />
                      </Card.Text>
                      <Card.Text>
                        Name - {data["Partitions"][0]["name"]}
                        <br />
                        Type - {data["Partitions"][0]["sys_type"]}
                        <br />
                        Size - {data["Partitions"][0]["Total_Size"]}
                        <br />
                        Used - {data["Partitions"][0]["Used"]}
                        <br />
                        Free - {data["Partitions"][0]["Free"]}
                        <br />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
