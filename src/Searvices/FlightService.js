async function getAllFlights() {
  try {
    const url = "http://localhost:8080/flights";

    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
     
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export default {  getAllFlights };