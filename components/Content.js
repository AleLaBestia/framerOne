import React from "react";
import styled from "styled-components";
import Image from "./Image";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Container = styled(motion.div)`
  padding: 20px;
  width: 100vw;
  height: 500vh;
`;

const Hero = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 10;
`;

const Mask = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.8);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
`;

const ImagesContainer = styled(motion.div)`
  position: fixed;
  top: 25vh;
  left: 0;
  right: 0;
  filter: blur(15px);

  .box {
    width: 100%;
    height: auto;
    padding: 50px 25px;
    display: block;
  }
`;

function Content() {
  const scrollAmount = 700;

  const { scrollYProgress, scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, scrollAmount], [1, 0]);
  const scale = useTransform(scrollY, [0, scrollAmount], [1, 1.3]);
  const filter = useTransform(
    scrollY,
    [0, scrollAmount],
    ["blur(10px)", "blur(0px)"]
  );
  const background = useTransform(
    scrollY,
    [0, scrollAmount],
    ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0)"]
  );

  const backgroundFramer = useTransform(
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

  const y = useTransform(
    scrollY,
    [-scrollAmount, scrollAmount, scrollAmount + 1],
    [-1, 0, -1],
    {
      clamp: false,
    }
  );

  const theme = useTransform(
    scrollY,
    [0, 100, 250, 350, 450],
    [
      "rgb(0, 255, 255)",
      "rgb(100, 255, 255)",
      "rgb(25, 2, 255)",
      "rgb(25, 2, 2)",
      "rgb(25, 100, 25)",
    ]
  );

  return (
    <Container style={{ backgroundColor: backgroundFramer }}>
      <Hero style={{ opacity, scale, color }}>
        <h1>Frontend Developer</h1>
        <h2>Based In Ukrania</h2>
      </Hero>
      <Mask
        style={{
          background,
        }}
      />
      <ImagesContainer style={{ y, filter }}>
        <div className="box">
          <Image />
        </div>
      </ImagesContainer>
    </Container>
  );
}

export default Content;
