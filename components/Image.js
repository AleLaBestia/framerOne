import React from "react";
import styled from "styled-components";
import yo from "../images/yo.png";

const Img = styled.img`
  width: 85%;
  height: auto;
  padding: 50px 25px;
`;

export default function Image() {
  return <Img src={yo} />;
}
