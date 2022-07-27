import * as React from "react";
import { gsap } from "gsap";

import Nav from "./Nav";
import Footer from "./Footer";
import "../../styles/styles.css";

const Layout: React.FC = (props: any) => {
  // let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } });

  // React.useEffect(() => {
  //   tl.from(".nav", { opacity: 0 }).from(".footer", {
  //     opacity: 0,
  //     delay: "-0.5",
  //   });
  // });

  return (
    <>
      <Nav />
      <Footer />
    </>
  );
};

export default Layout;
