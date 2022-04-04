import React from 'react'
import about from '../img/about.jpg'
import Common from "./Common";
function About() {
  return (
   <>
   <Common heading=' Welcome to About Page ' btn='Contact Now' linkTo='/contact' imgsrc={about}/>

   </>
  );
}

export default About;
