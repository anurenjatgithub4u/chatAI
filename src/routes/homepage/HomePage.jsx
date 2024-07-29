import React from "react";
import "../homepage/homepage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';



const HomePage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <div className="left">
          <h1>CHAT AI</h1>
          <h2>Supercharge your creativity and productivity</h2>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            sint dolorem doloribus, architecto dolor.
          </h3>
          <Link to="/dashboard">Get Started</Link>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          {" "}
          <div className="bgContainer">
            {" "}
            <div className="bg"></div>
          </div>

<img src="/bot.png" alt="" className="bot"/>

<div className="chat">


  <img src="/bot.png" alt="" />
<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Human:We are better',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Bot:No we are better',
        1000,
        'Human:We are better',
        1000,
        'Bot:No we are better',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

</div>

        </div>
      </div>

      <div className="terms">

<img src="/logo.png"   alt="" />



<div  className="links">
  
  <Link  to={"/"}> Terms of Service </Link>

  <Link  to={"/"}> Privacy </Link>
     </div>

      </div>
    </div>
  );
};

export default HomePage;
