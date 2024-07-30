import React, { useEffect, useState } from "react";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { toast } from "react-toastify";

const FlightStatus = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe("/topic/flight-status", (message) => {
        if (message.body) {
          const flightStatus = message.body;
          setMessages((prevMessages) => {
            const newMessages = [...prevMessages, flightStatus];
            toast.success(`Flight status: ${flightStatus}`, {
              autoClose: 5000,
            });
            return newMessages;
          });
        }
      });
    });

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, []);

  return (
    <div>
      {/* <h1>Flight Status Updates</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul> */}
    </div> 
  );
};

export default FlightStatus;
