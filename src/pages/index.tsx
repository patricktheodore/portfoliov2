import * as React from "react";
import "../styles/styles.css";
import { gsap } from "gsap";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

const IndexPage = () => {
  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } });

  React.useEffect(() => {
    tl.from(".nav", { opacity: 0 }).from(".footer", {
      opacity: 0,
      delay: "-0.5",
    });
  });

  return (
    <>
      <Nav />
      <Footer />
    </>
  );
};

export default IndexPage;
