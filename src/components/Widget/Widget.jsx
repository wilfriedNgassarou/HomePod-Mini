export default function Widget({step, iconShowed, changeIconShowed}) {
  let className ;

  function handleTransitionEnd(e) {
    if(!e.target.closest('.item')) return ;

    const widget = iconShowed ;

    if(widget == 'music') {
      setTimeout(() => {
        changeIconShowed('message') ;
      }, 500);
    }

    if(widget == 'message') {
      setTimeout(() => {
        changeIconShowed('podcast')
      }, 500);
    }

    if(widget == 'podcast') {
      setTimeout(() => {
        changeIconShowed('homes')
      }, 500);
    }

    if(widget == 'homes') {
      setTimeout(() => {
        changeIconShowed('all')
      }, 500);
    }

  }

  if(step == 3) {
    className = 'widget widget-active'
  }

  else {
    className = 'widget'
  }

  return (
    <section className={className}>
      <div className={`icon-container ${iconShowed}`}>
        <div onTransitionEnd={handleTransitionEnd} className="icon-with-text">
          <div data-target = "music" className="item">
            <div className="text">
              <h3>
                <span>
                  Hey Siri
                </span>
              </h3>
              <p>
                <span>
                  <span>
                   Listen to tracks by song, artist, album, playlist, 
                  </span>
                </span>
                <span>
                  <span>
                    genre, or lyrics.6
                  </span>
                </span>
              </p>
            </div>
            <div className="img">
              <img src="/assets/icons/music.svg" alt="" />
            </div>
          </div>
          <div data-target = "message" className="item">
            <div className="text">
              <h3>
                <span>
                  Hey Siri
                </span>
              </h3>
              <p>
                <span>
                  <span>
                    Send and receive messages, and make or 
                  </span>
                </span>
                <span>
                  <span>
                    phone calls.
                  </span>
                </span>
              </p>
            </div>
            <div className="img">
              <img src="/assets/icons/message.svg" alt="" />
            </div>
          </div>
          <div data-target = "home" className="item">
            <div className="text">
              <h3>
                <span>
                  Hey Siri
                </span>
              </h3>
              <p>
                <span>
                  <span>
                      Control smart home accessories like 
                  </span>
                </span>
                <span>
                  <span>
                      thermostats, lights, and blinds.7
                  </span>
                </span>
              </p>
            </div>
            <div className="img">
              <img src="/assets/icons/home.svg" alt="" />
            </div>
          </div>
          <div data-target = "podcast" className="item">
            <div className="text">
              <h3>
                <span>
                  Siri
                </span>
              </h3>
              <p>
                <span>
                  <span>
                    Listen to Apple Podcasts and radio stations.
                  </span>
                </span>
              </p>
            </div>
            <div className="img">
              <img src="/assets/icons/podcast.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="icon-without-text">
          <div className="item">
            <img src="/assets/icons/calculator.svg" alt="Calculator" />
          </div>
          <div className="item">
            <img src="/assets/icons/findmy.svg" alt="Calculator" />
          </div>
          <div className="item">
            <img src="/assets/icons/message.svg" alt="Calculator" />
          </div>
          <div className="item">
            <img src="/assets/icons/notes.svg" alt="Calculator" />
          </div>
          <div className="item">
            <img src="/assets/icons/maps.svg" alt="Calculator" />
          </div>
          <div className="item">
            <img src="/assets/icons/ytmusic.svg" alt="Calculator" />
          </div>
        </div>
      </div>
    </section>
  )
}