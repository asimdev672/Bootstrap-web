import React from "react";
import Common from "./Common";
import web from '../img/web.jpeg'

function Home() {
  return (
    <>
         <Common heading=' Grow Your Business with ' btn='Get Started' linkTo='/services' imgsrc={web}/>
    </>
  );
}

export default Home;
