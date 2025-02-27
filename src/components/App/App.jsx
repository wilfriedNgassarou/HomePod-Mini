import { useState } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Shrinking from "../Shrinking/Shrinking";
import './../../styles/index.css' ;
import Widget from "../Widget/Widget";
import Credit from "../Credit/Credit";

export default function App() {
  const [animationStep, setAnimationStep] = useState(1) ;
  const [iconShowed, setIconShowed] = useState('') ;

  return (
    <>
      <div className='large-screen'>
        <span style={{ fontSize: 20 }}>
          Please, use a large screen
        </span>
      </div>
      <Header />
      <main>
        <Hero  
          step={animationStep}
          changeStep={setAnimationStep}
          iconShowed={iconShowed}
          changeIconShowed={setIconShowed} 
        />
        <Shrinking
          step={animationStep} 
          changeStep={setAnimationStep}  
        />
        <Widget
         step={animationStep}
         iconShowed = {iconShowed}
         changeIconShowed={setIconShowed} 
        />
        <Credit />
      </main>
    </>
  )
}