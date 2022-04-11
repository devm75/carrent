import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaRegCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  Section,
  Section1A,
  Section1B,
  ImageOverlay,
  ImageTextContainer,
  FloatingFormContainer,
  Form,
} from "../StyledComponents/Homepage";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material';
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

export const Homepage = () => {
  const [carType, setCarType] = React.useState("");
  const [pickupLocation, setPickUpLocation] = useState("");
  const [dropOfLocation, setDropOfLocation] = useState("");
  const [pickupTime, setPickUpTime] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const cartypes = [{ key: 1, text: "SEDAN", value: 'SEDAN' }, { key: 2, text: "COUPE", value: 'COUPE' }, { key: 3, text: "SPORTS CAR", value: 'SPORTS CAR' }, { key: 4, text: "STATION WAGON", value: 'STATION WAGON' }, { key: 5, text: "HATCHBACK", value: 'HATCHBACK' }, { key: 6, text: "HATCHBACK", value: 'CONVERTIBLE' }, { key: 7, text: "SPORT-UTILITY-VEHICLE", value: 'SPORT-UTILITY VEHICLE (SUV)' }, { key: 8, text: "MINIVAN", value: 'MINIVAN' }, { key: 9, text: "PICKUP TRUCK", value: 'PICKUP TRUCK' }]

  const handleChange = (event) => {
    // setCarType(event.target.value);
  };

  return (
    <div>
      <Section>
        <FloatingFormContainer>
          <Form>
            <FormControl sx={{ minWidth: "90%", margin: "20px" }}>
              <InputLabel id="select-car-label">
                {" "}
                <span style={{ fontWeight: "bold" }}> Select Your Car Type</span>  {" "}
              </InputLabel>
              <Select
                labelId="select-car-label"
                id="select-car-label"
                value={carType}
                label="Select Your Car Type"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"sedan"}>Sedan</MenuItem>
                <MenuItem value={"suv"}>SUV</MenuItem>
                <MenuItem value={"muv"}>MUV</MenuItem>
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "20px",
              }}
            >
              <Button
                style={{
                  color: "black",
                  height: "56px",
                  backgroundColor: "rgb(240, 220, 218)",
                  fontSiize: "14px",
                  fontWeight: "bold",
                  width: "125px",
                  transform: "translateY(-2px)",
                }}
                variant="contained"
              >
                <MdLocationOn style={{ fontSize: "22px" }} />
                <span>Pick-up</span>
              </Button>
              <FormControl
                sx={{ minWidth: "70%", margin: "20px", marginLeft: 0 }}
              >
                <InputLabel id="select-car-label">
                  {" "}
                  Pick Up Location{" "}
                </InputLabel>
                <Select
                  labelId="select-pickup-location"
                  id="select-pickup-location"
                  value={pickupLocation}
                  label="pick up-location"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"sedan"}>California</MenuItem>
                  <MenuItem value={"suv"}>Atlanta</MenuItem>
                  <MenuItem value={"muv"}>Bay Area</MenuItem>
                </Select>
                <FormHelperText></FormHelperText>
              </FormControl>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "20px",
              }}
            >
              <Button
                style={{
                  color: "black",
                  height: "56px",
                  backgroundColor: "rgb(240, 220, 218)",
                  fontSiize: "14px",
                  fontWeight: "bold",
                  width: "125px",
                  transform: "translateY(-2px)",
                }}
                variant="contained"
              >
                <MdLocationOn style={{ fontSize: "22px" }} />
                <span>drop-of</span>
              </Button>
              <FormControl
                sx={{ minWidth: "70%", margin: "20px", marginLeft: 0 }}
              >
                <InputLabel id="select-car-label">
                  {" "}
                  Drop Of Location{" "}
                </InputLabel>
                <Select
                  labelId="select-drop0f-location"
                  id="select-drop0f-location"
                  value={dropOfLocation}
                  label="Drop Of location"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"sedan"}>California</MenuItem>
                  <MenuItem value={"suv"}>Atlanta</MenuItem>
                  <MenuItem value={"muv"}>Bay Area</MenuItem>
                </Select>
                <FormHelperText></FormHelperText>
              </FormControl>
            </div>
            <div style={{ display: "flex", gap:"20px",width:"100%" }}>
              
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
              <Button
                style={{
                  color: "black",
                  height: "56px",
                  backgroundColor: "rgb(240, 220, 218)",
                  fontSiize: "14px",
                  fontWeight: "bold",
                  width: "125px",
                    transform: "translateY(-2px)",
                    marginLeft: "20px"
              

                  }}
                  onClick={() => setShowCalendar(!showCalendar)}
                variant="contained"
              >
                <FaRegCalendarAlt style={{ paddingRight: "5px",  fontSize: "22px" }} />
                  <span>Pick-up</span>
                  {showCalendar && <Calendar/>}
              </Button>
              <InputMask
                mask="99/99/9999"
                // value={this.state.phone}
                disabled={false}
                maskChar=""

              >
                {() => <TextField placeholder="dd/mm/yyyy" style={{ width: "162px" }}/>}
              </InputMask>
            </div>
            <FormControl
              sx={{ minWidth: "150px", margin: "20px", marginLeft: 0 }}
            >
              <InputLabel id="select-pickup-time">
                {" "}
                Time{" "}
              </InputLabel>
              <Select
                labelId="select-pickup-time"
                id="select-pickup-location"
                value={pickupTime}
                label="Time"
                  onChange={handleChange}
                  
              >
               
               
                <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
                  <MenuItem value={"12:30 AM"}>12:30 AM</MenuItem>
                <MenuItem value={"1:00 AM"}>01:00 AM</MenuItem>
              </Select>
              <FormHelperText></FormHelperText>
              </FormControl>
            </div>
            <div style={{ display: "flex", gap: "20px", width: "100%" }}>

              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                <Button
                  style={{
                    color: "black",
                    height: "56px",
                    backgroundColor: "rgb(240, 220, 218)",
                    fontSiize: "14px",
                    fontWeight: "bold",
                    width: "125px",
                    transform: "translateY(-2px)",
                    marginLeft: "20px"


                  }}
                  onClick={() => setShowCalendar(!showCalendar)}
                  variant="contained"
                >
                  <FaRegCalendarAlt style={{ paddingRight: "5px", fontSize: "22px" }} />
                  <span>Drop-of</span>
                  {showCalendar && <Calendar />}
                </Button>
                <InputMask
                  mask="99/99/9999"
                  // value={this.state.phone}
                  disabled={false}
                  maskChar=""

                >
                  {() => <TextField placeholder="dd/mm/yyyy" style={{ width: "162px" }} />}
                </InputMask>
              </div>
              <FormControl
                sx={{ minWidth: "150px", margin: "20px", marginLeft: 0 }}
              >
                <InputLabel id="select-pickup-time">
                  {" "}
                  Time{" "}
                </InputLabel>
                <Select
                  labelId="select-pickup-time"
                  id="select-pickup-location"
                  value={pickupTime}
                  label="Time"
                  onChange={handleChange}

                >


                  <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
                  <MenuItem value={"12:30 AM"}>12:30 AM</MenuItem>
                  <MenuItem value={"1:00 AM"}>01:00 AM</MenuItem>
                </Select>
                <FormHelperText></FormHelperText>
              </FormControl>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}>
              <Button style={{ width: "90%", backgroundColor: "#FC3903" }} variant="contained"><span style={{fontWeight:"bold",fontSize:"35px"}}>BOOK NOW</span></Button>
              </div>
          </Form>





        </FloatingFormContainer>
        <Section1A src="homepage-image-1.jpg">
          <ImageTextContainer>
            <p style={{ textAlign: "end", opacity: 1, padding: "20px" }}>
              Drive With Happiness
            </p>
          </ImageTextContainer>
          <ImageOverlay />
        </Section1A>

        <Section1B></Section1B>
      </Section>
    </div>
  );
};
