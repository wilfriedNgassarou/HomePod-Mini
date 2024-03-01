export default function Shrinking({step, changeStep}) {
  let className ;
  
  if(step == 1) {
    className = 'shrinking' ;
  } else if (step == 2) {
    className = 'shrinking shrinking-active' ;

    setTimeout(() => {
      
      changeStep(3) ;

    }, 2000);
  } else if(step == 3) {
    className = 'shrinking shrinking-close'
  }


  return (
    <section className={className}>
      <img src="/assets/shrinking.png" alt="Shrinking" />
    </section>
  )
}