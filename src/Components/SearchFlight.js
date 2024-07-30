import React, { useEffect, useState } from 'react'
import { Card } from 'reactstrap';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container } from '@mui/material';
import FlightDetails from './FlightDetails';
import data from './MockData';
import FlightService from '../Searvices/FlightService';
const ariaLabel = { 'aria-label': 'description' };


function SearchFlight() {
    const [flightDetails,setFlightDetails] = useState([]);
    const [response, setResponse] = useState([]);
    useEffect(()=>{
        FlightService.getAllFlights()
          .then((res) => {
            const data = res;
            if (data === undefined) {
              alert("Something went wrong");
            } else {
              setFlightDetails(data);
              setResponse(data);
              console.log("data " + JSON.stringify(data));
            }
          })
          .catch((error) => {
            alert("Error" + error);
          });
        
    },[])
    // State to store input values
    const [formData, setFormData] = useState({
        date: '',
        from: '',
        to: '',
        flightNumber: '',
        pnr: '',
    });

    // Handle change for input fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const clear = (event) => {
        // const { name, value } = event.target;
        setFormData({ 
        date: '',
        from: '',
        to: '',
        flightNumber: '',
        pnr: '', 
    });
    setFlightDetails(response);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page refresh
        console.log(formData); // Log input data
        // const filteredFlights = data.filter(flight => 
        //     flight.flightNumber.toLowerCase().includes(formData.flightNumber.toLowerCase()!=='')||
        //     flight.departureAirport.toLowerCase().includes(formData.from.toLowerCase())
        //   );
          const filteredFlights = flightDetails.filter(
            (flight) =>
              (formData.flightNumber &&
                flight.flightNumber &&
                flight.flightNumber
                  .toLowerCase()
                  .includes(formData.flightNumber.toLowerCase())) ||
              (formData.from &&
                flight.departureAirport &&
                flight.departureAirport
                  .toLowerCase()
                  .includes(formData.from.toLowerCase())) ||
              (formData.date &&
                flight.scheduledDeparture &&
                flight.scheduledDeparture
                  .toLowerCase()
                  .includes(formData.date.toLowerCase())) ||
              (formData.to &&
                flight.arrivalAirport &&
                flight.arrivalAirport
                  .toLowerCase()
                  .includes(formData.to.toLowerCase())) ||
              (formData.pnr &&
                flight.arrivalAirport &&
                flight.arrivalAirport
                  .toLowerCase()
                  .includes(formData.to.toLowerCase()))
          );
           console.log("Filter "+ JSON.stringify(filteredFlights))
          setFlightDetails(filteredFlights);
    };
    return (
        <div style={{ textAlign: "center", height: "300px" }}>
            <Card style={{ marginTop: "5%", marginLeft: "50px", marginRight: "50px" }}>
                <Box style={{ paddingTop: "20px", paddingBottom: "20px" }}
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <Input type="Date" name="date" value={formData.date} onChange={handleChange} inputProps={ariaLabel} />
                    <Input placeholder="From" name="from" value={formData.from} onChange={handleChange} inputProps={ariaLabel} />
                    <Input placeholder="To" name="to" value={formData.to} onChange={handleChange} inputProps={ariaLabel} />
                    <Input placeholder="Flight Number" name="flightNumber" value={formData.flightNumber} onChange={handleChange} inputProps={ariaLabel} />
                    {/* <Input placeholder="PNR/Booking Ref." name='pnr' value={formData.pnr} onChange={handleChange} inputProps={ariaLabel} /> */}
                    <Button variant="contained" type='submit' style={{ fontWeight: "bold" }} endIcon={<ArrowForwardIcon />}>Search Flight </Button>
                    <Button variant="contained" onClick={clear} style={{ fontWeight: "bold" }} >Clear </Button>
                </Box>
            </Card>
            <Container style={{ marginTop: "20px" }}>
                {flightDetails.map((flight, index) => (
                    <FlightDetails key={index} flight={flight} />
                ))}
            </Container>


        </div>
    )
}

export default SearchFlight
