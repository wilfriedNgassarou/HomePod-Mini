export default function Widget({step, iconShowed, changeIconShowed}) {
  let className ;

  if(step == 3) {
    className = 'widget widget-active'
  }

  else {
    className = 'widget'
  }

  return (
    <section className={className}>
      <div className={`icon-container ${iconShowed}`}>
        <div className="icon-with-text">
          <div className="item">
            <div className="text">
              <h3>
                <span>
                  Hey Siri
                </span>
              </h3>
              <p>
                <span>
                 Listen to tracks by song, artist, album, playlist, <br />
                </span> <br />
                <span>
                 genre, or lyrics.6
                </span>
              </p>
            </div>
            <div className="img">
              <img src="/assets/icons/music.svg" alt="" />
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>
                <span>
                  Hey Siri
                </span>
              </h3>
              <p>
                Send and receive messages, and make or take <br />
                 phone calls.
              </p>
            </div>
            <div className="img">
              <img src="/assets/icons/message.svg" alt="" />
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src="/assets/icons/home.svg" alt="" />
            </div>
            <div className="text">
              <h3>
                <span>
                  Hey Siri
                </span>
              </h3>
              <p>
                Control smart home accessories like thermostats, lights, and blinds.7
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>
                <span>
                  Hey Siri
                </span>
              </h3>
              <p>
                Listen to Apple Podcasts and radio stations.
              </p>
            </div>
            <div className="img">
              <img src="/assets/icons/podcast.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="icon-without-text"></div>
      </div>
    </section>
  )
}