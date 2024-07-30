import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FlightStatus from './Components/FlightStatus';
import SearchFlight from "./Components/SearchFlight";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        style={{ width: "auto", height: "auto", fontSize: "15px" }}
      />
      <Navbar style={{ position: "fixed" }} />
      <FlightStatus />
      <div style={{ overflowY: "scroll", height: "500px" }}>
        <SearchFlight />
      </div>
    </div>
  );
}

export default App;
