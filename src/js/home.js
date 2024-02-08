export default function home() {
  return `
          
            <section class="text-align-center welcome-msg">
                <h2 class="opacity-80">
                    Welcome to
                    <span class="block curly-text large-text opacity-100"
                        >24Eatups</span
                    >
                </h2>
                <div class="padding-10 small-text">— Our little story —</div>
                <div class="story-text padding-20">
                    labore aliquip adipisicing tempor in laboris sint id ut
                    excepteur eu in minim et officia commodo non ad laborum
                    consequat labore commodo in consectetur est id ullamco enim
                    elit consectetur enim fugiat id laborum cupidatat eiusmod
                    quis eiusmod nostrud anim quis tempor consectetur eu ipsum
                    nostrud ullamco amet sunt ex
                </div>
            </section>
            <section class="chefs-img">
                <img
                    src="../assets/images/24eatups-team.png"
                    alt="24 eatups chefs"
                />
            </section>
            <section class="image-with-quote fade-bottom">
                <img
                    src="../assets/images/people-eating.png"
                    alt="people eating"
                />
                <div class="text-on-image">
                    Part of the secret of a success in life is to eat what you
                    like and let the food fight it out inside.
                    <span class="quote-author">— Mark Twain</span>
                </div>
            </section>
                  <section class="hours text-align-center padding-20">
              <div class="curly-text large-text">Hours</div>
              <p>Mondays:</p>
              <p>07:30 a.m. – 4:30 p.m.</p>
              <hr />

              <p>Tuesdays, Wednesdays and Thursdays:</p>
              <p>07:30 a.m. – 07:30 p.m.</p>
              <hr />
              <p>Fridays:</p>
              <p>07:30 a.m. – 10:30 p.m.</p>
              <hr />
              <p>Saturdays:</p>
              <p>07:30 a.m. – 9:30 p.m.</p>
              <hr />
              <p class="bold">Happy Hours(20% Off):</p>
              <p>6:30 p.m. - 10:30 p.m.</p>
            
            </section>
            <section class="customer-reviews text-align-center padding-20">
                <div class="curly-text large-text">reviews</div>
                <div class="padding-10 small-text">— What they say —</div>
            </section>
      
            <section>
                <div class="slider-container">
                    <div class="my-slider">
                        <div class="slide-1 slide-content">
                            <span class="customer-img"
                                ><img
                                    src="../assets/images/persons/person1.png"
                                    alt="customer image"
                            /></span>
                            <span class="customer-name">Sarah Jumps</span>
                            <span class="customer-comment"
                                >laboris labore do commodo elit sunt enim enim
                                nisi consectetur aliquip minim labore
                                adipisicing irure quis ut occaecat</span
                            >
                            <span class="customer-rating"></span>
                        </div>
                        <div class="slide-2 slide-content">
                            <span class="customer-img"
                                ><img
                                    src="../assets/images/persons/person2.png"
                                    
                                    alt="customer image"
                            /></span>
                            <span class="customer-name">James Ruddit</span>
                            <span class="customer-comment"
                                >laboris labore do commodo elit sunt enim enim
                                nisi consectetur aliquip minim labore
                                adipisicing irure quis ut occaecat</span
                            >
                            <span class="customer-rating"></span>
                        </div>
                        <div class="slide-3 slide-content">
                            <span class="customer-img"
                                ><img
                                    src="../assets/images/persons/person3.png"
                                    alt="customer image"
                            /></span>
                            <span class="customer-name">Ella Tate</span>
                            <span class="customer-comment"
                                >laboris labore do commodo elit sunt enim enim
                                nisi consectetur aliquip minim labore
                                adipisicing irure quis ut occaecat</span
                            >
                            <span class="customer-rating"></span>
                        </div>
                        <div class="slide-4 slide-content">
                            <span class="customer-img"
                                ><img
                                    src="../assets/images/persons/person4.png"
                                    alt="customer image"
                            /></span>
                            <span class="customer-name">Thomas Black</span>
                            <span class="customer-comment"
                                >laboris labore do commodo elit sunt enim enim
                                nisi consectetur aliquip minim labore
                                adipisicing irure quis ut occaecat</span
                            >
                            <span class="customer-rating"></span>
                        </div>
                    </div>
                </div>
                <div class="slider-nav">
                    <ul>
                        <li class="dot dot-1 active"></li>
                        <li class="dot dot-2"></li>
                        <li class="dot dot-3"></li>
                        <li class="dot dot-4"></li>
                    </ul>
                </div>
            </section>
        `
}