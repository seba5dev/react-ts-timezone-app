import React, { useEffect, useState } from "react";
import { Container, Title, Text, Card, BigText } from "./styles";
import AnalogClock from "analog-clock-react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  let options = {
    useCustomTime: true, // set this to true
    width: "15rem",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#fff",
    centerColor: "#000",
    centerBorderColor: "#000",
    handColors: {
      second: "#ff0000",
      minute: "#9f9f9f",
      hour: "#000000",
    },
    seconds: time.getSeconds(), // set your
    minutes: time.getMinutes(), // own
    hours: time.getHours(), // time here.
  };

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <Container>
      <Card>
        <AnalogClock {...options} />
        <Title>Hora actual en tu ubicación</Title>
        <BigText>{time.toLocaleTimeString()}</BigText>
        <Text>
          Tu zona horaria es {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </Text>
      </Card>
    </Container>
  );
}
