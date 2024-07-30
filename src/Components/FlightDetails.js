// FlightDetails.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Button, CardActionArea } from '@mui/material';
import { Col, Row } from 'reactstrap';


const FlightDetails = ({ flight }) => {
    // let content="pkkkk"
    const [content, setContent] = useState("");
    const [display, setDisplay] = useState(false);
    const [isContentShown, setIsContentShown] = useState(false);

    const show = () => {
        if (isContentShown) {
            setContent(null);
            setIsContentShown(false);
        } else {
            const newContent = <Card style={{ marginTop: "0px" ,backgroundColor:"whitesmoke"}}>
                <CardActionArea>
                    <CardContent >
                        <Row style={{ textAlign: "left" }}>
                            <Col>
                                <Typography variant="body2" color="text.secondary">
                                    Flight Number
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    {flight.flightNumber}
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="body2" color="text.secondary">
                                    Departure Airport
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    {flight.departureAirport}
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="body2" color="text.secondary">
                                    Arrival Airport
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    {flight.arrivalAirport}
                                </Typography>
                            </Col>

                            <Col>
                                <Typography variant="body2" color="text.secondary">
                                    Gate
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    {flight.gate}
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="body2" color="text.secondary">
                                    Terminal
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    {flight.terminal}
                                </Typography>
                            </Col>

                        </Row>
                        <Row style={{ textAlign: 'left', marginTop: "10px" }}>
                            <Col>
                                <Typography variant="body2" color="text.secondary">
                                    Scheduled Departure
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    {new Date(flight.scheduledDeparture).toLocaleString()}
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="body2" color="text.secondary">
                                    Estimated Departure
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    {new Date(flight.estimatedDeparture).toLocaleString()}
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="body2" color="text.secondary">
                                    Scheduled Arrival
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    {new Date(flight.scheduledArrival).toLocaleString()}
                                </Typography>
                            </Col>
                            <Col>
                                <Typography variant="body2" color="text.secondary">
                                    Estimated Arrival
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    {new Date(flight.estimatedArrival).toLocaleString()}
                                </Typography>
                            </Col>


                        </Row>

                    </CardContent>
                </CardActionArea>
            </Card>
            setContent(newContent);
            setIsContentShown(true);
        }
    }
    const getStatusColor = (status) => {
        switch (status) {
          case "Delayed":
            return "error"; // Red
          case "On Time":
            return "success"; // Green
          case "Cancelled":
            return "warning"; // Yellow
          default:
            return "primary"; // Default color
        }
      };


    return (
      <div>
        <div onClick={show} style={{ marginTop: "20px" }}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Row>
                  <Col>
                    <Typography variant="body2" color="text.secondary">
                      Flight Number
                    </Typography>
                    <Typography variant="body1">
                      {flight.flightNumber}
                    </Typography>
                  </Col>
                  <Col>
                    <Typography variant="body2" color="text.secondary">
                      Departure Airport
                    </Typography>
                    <Typography variant="body1">
                      {flight.departureAirport}
                    </Typography>
                  </Col>
                  <Col>
                    <Typography variant="body2" color="text.secondary">
                      Arrival Airport
                    </Typography>
                    <Typography variant="body1">
                      {flight.arrivalAirport}
                    </Typography>
                  </Col>
                  <Col>
                    <Typography variant="body2" color="text.secondary">
                      Scheduled Departure
                    </Typography>
                    <Typography variant="body1">
                      {new Date(flight.scheduledDeparture).toLocaleString()}
                    </Typography>
                  </Col>
                  <Col>
                    <Typography variant="body2" color="text.secondary">
                      Scheduled Arrival
                    </Typography>
                    <Typography variant="body1">
                      {new Date(flight.scheduledArrival).toLocaleString()}
                    </Typography>
                  </Col>
                  <Col>
                    <Button
                      variant="contained"
                      color={getStatusColor(flight.status)}
                      style={{ fontWeight: "bold" }}
                    >
                      {flight.status}{" "}
                    </Button>
                  </Col>
                </Row>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <section>{content}</section>
      </div>
    );
};

export default FlightDetails;
