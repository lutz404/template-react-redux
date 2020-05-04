import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      Okay!!!!!
      <Link to="/home">Navigate to home</Link>
      <Link to="/login">Navigate to login</Link>
    </Container>
  );
}
