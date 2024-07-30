import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   logo: {
//     height: "40px", // Adjust as needed
//     marginRight: "10px", // Adjust as needed
//   },
// });

const Navbar = () => {
//   const classes = useStyles();
  const logoUrl =
    "https://s6web-prod.goindigo.in/content/dam/s6web/in/en/assets/logo/IndiGo_logo_2x.png"; // Replace with your logo URL

  return (
    <AppBar position="static" style={{ backgroundColor: "whitesmoke" }}>
      <Toolbar>
        <img src={logoUrl} alt="Logo" style={{height:'3rem', width:'10rem', marginRight:'10pz'}}  />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
