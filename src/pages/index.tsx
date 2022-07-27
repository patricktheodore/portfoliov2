import * as React from "react";
import "../styles/styles.css";
import { gsap } from "gsap";
import Layout from "../components/layout/Layout";

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
      <Layout />
    </>
  );
};

export default IndexPage;
