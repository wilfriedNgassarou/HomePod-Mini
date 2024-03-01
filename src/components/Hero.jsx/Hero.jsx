import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"

export default function Hero() {
  const [animationState, setAnimationState] = useState('') ;

  const cursor2 = useRef(null) ;

  function handleClick() {
    setAnimationState('middle') ;
  }


  useEffect(() => {
    setAnimationState('start') ;

  }, [])

  function handleAnimationEnd() {
    setAnimationState('end')
  }
  
  return (
    <div className={"hero " + animationState}>
      <article className="start-text">
        <h1>
            Nothing short <br />
            of amazing
        </h1>
        <h2>
          HomePod mini
        </h2>
      </article>
      <article  className="middle-text">
        <h1>
          <span>Siri does everything</span> <br />
          <span>like there's</span> <br />
          <span>nothing to it.</span>
        </h1>
      </article>
      <article className="end-text">
        <h2>
          You've never heard <br />
          color like this.
        </h2>
      </article>
      <article className="hero-btn-container">
        <span onClick={handleClick}>
          <a className="btn" href="#">Discover</a>
        </span>
      </article>
      <div className={"homepod-container"}>
        <div>
          <img src="assets/homepod/hp_white.svg" alt="Home Pod White" />
        </div>
        <div>
          <img src="assets/homepod/hp_blue.svg" alt="Home Pod Blue" />
        </div>
        <div>
          <img src="assets/homepod/hp_yellow.svg" alt="Home Pod Yellow" />
        </div>
        <div>
          <img src="assets/homepod/hp_black.svg" alt="Home Pod Black" />
        </div>
        <div>
          <img src="assets/homepod/hp_orange.svg" alt="Home Pod Orange" />
        </div>
        <article className="cursor-1"></article>
        <article onAnimationEnd={handleAnimationEnd} ref={cursor2} className="cursor-2"></article>
        <span className="homepod-text">
          <img src="/assets/mini.png" alt="Mini" />
        </span>
      </div>
    </div>
  )
}