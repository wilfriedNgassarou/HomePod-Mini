import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"

export default function Hero({step, changeStep, iconShowed, changeIconShowed}) {
  const [animationState, setAnimationState] = useState('') ;
  // On change le state lorsque la 2e transition se produit
  const [transitionNumber, setTransitionNumber] = useState(0) ;

  const cursor2 = useRef(null) ;
  const homePodRef = useRef(null) ;

  function handleClick() {
    setAnimationState('middle') ;
  }

  
  if(step == 3) {
    setTimeout(() => {
      setAnimationState('widget-open')
        
      
      setTimeout(() => {
        if(iconShowed == '') {
          changeIconShowed('music')
        }

      }, 1000);

      }, 50);    
  
  }


  useEffect(() => {
    setAnimationState('start') ;

  }, [])

  function handleAnimationEnd() {
    setAnimationState('end')
  }

  function handleTransitionEnd() {
    setTransitionNumber(tn => tn + 1) ;

    if(transitionNumber == 1) {
      changeStep(2)
      setAnimationState('close')
    }
  }
  
  return (
    <div className={`hero  ${animationState}`}>
      <article className="start-text">
        <h1>
            <span>
              <span>
                Nothing short
              </span>
            </span>
            <span>
              <span>
                of amazing
              </span>
            </span>
        </h1>
        <h2>
          <span>
            HomePod mini
          </span>
        </h2>
      </article>
      <article  className="middle-text">
        <h1>
          <span>Siri does everything</span> 
          <span>like there's</span>
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
      <div className={`homepod-container ${iconShowed}`}>
        <div>
          <img src="assets/homepod/hp_white.svg" alt="Home Pod White" />
        </div>
        <div>
          <img src="assets/homepod/hp_blue.svg" alt="Home Pod Blue" />
        </div>
        <div>
          <img src="assets/homepod/hp_yellow.svg" alt="Home Pod Yellow" />
        </div>
        <div className="black">
          <img src="assets/homepod/hp_black.svg" alt="Home Pod Black" />
        </div>
        <div ref={homePodRef} onTransitionEnd={handleTransitionEnd} className="orange">
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