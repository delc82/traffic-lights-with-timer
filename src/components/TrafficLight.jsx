import React, { useEffect } from "react";
import "./TrafficLight.css";

function TrafficLight(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.changeLight();
    }, 10000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="trafficlight">
        <div className="protector" />
        <div className="protector" />
        <div className="protector" />
        <div className={`red ${props.isRedOn ? "on" : ""}`} />
        <div className={`yellow ${props.isYellowOn ? "on" : ""}`} />
        <div className={`green ${props.isGreenOn ? "on" : ""}`} />
      </div>
    </>
  );
}

export default TrafficLight;
