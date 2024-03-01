import { useState } from "react";
import Header from "../Header/Header";
import Hero from "../Hero.jsx/Hero";
import Shrinking from "../Shrinking/Shrinking";
import './../../styles/index.css' ;
import Widget from "../Widget/Widget";

export default function App() {
  const [animationStep, setAnimationStep] = useState(1) ;
  const [iconShowed, setIconShowed] = useState('') ;

  console.log(iconShowed);

  return (
    <>
      <Header />
      <main>
        <Hero 
          step={animationStep} 
          changeStep={setAnimationStep}
          iconShowed={iconShowed}
          changeIconShowed={setIconShowed} 
        />
        <Shrinking step={animationStep} changeStep={setAnimationStep}  />
        <Widget
         step={animationStep}
         iconShowed = {iconShowed}
         changeIconShowed={setIconShowed} 
        />
      </main>
    </>
  )
}