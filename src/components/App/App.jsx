import { useState } from "react";
import Header from "../Header/Header";
import Hero from "../Hero.jsx/Hero";
import Shrinking from "../Shrinking/Shrinking";
import './../../styles/index.css' ;

export default function App() {
  const [animationStep, setAnimationStep] = useState(1) ;

  console.log(animationStep);

  return (
    <>
      <Header />
      <main>
        <Hero step={animationStep} changeStep={setAnimationStep} />
        <Shrinking step={animationStep} changeStep={setAnimationStep}  />
      </main>
    </>
  )
}