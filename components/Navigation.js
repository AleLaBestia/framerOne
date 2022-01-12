import React from "react";
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const NavStyles = styled(motion.div)`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 15;
  background-color: lightcoral;
  color: rgba(21, 21, 21, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 0 24px;

  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.02rem;
`;

const Logo = styled.div`
  display: flex;
  flex: 4;
`;

const Links = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  li {
    list-style-type: none;
  }
`;

function Navigation() {
  const { scrollY, scrollYProgress } = useViewportScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 1],
    [
      "rgba(0, 183, 255, 0)",
      "rgba(0, 183, 255, 1)",
      "rgba(155, 183, 255, 1)",
      "rgba(255, 113, 255, 1)",
      "rgba(0, 253, 255, 1)",
    ]
  );
  const color = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 1],
    [
      "rgba(0, 0, 0)",
      "rgba(0, 1, 2)",
      "rgba(255, 255, 255)",
      "rgba(255, 255, 255)",
      "rgba(255, 253, 255)",
    ]
  );

  return (
    <NavStyles
      style={{
        background,
        color,
      }}
    >
      <Logo>AleLabestia</Logo>
      <Links>
        <li>about</li>
        <li>projects</li>
        <li>contact</li>
      </Links>
    </NavStyles>
  );
}

export default Navigation;
