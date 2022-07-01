import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../../utilities/ScrollService";
import Animations from "../../../utilities/Animations";
import "./Testimonial.css"


import "./Testimonial.css";

const Testimonial = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animationIn: "bounceInRight",
    animationOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0:{

      },
      768:{

      },
      1000:{

      },
    }
  }
  
  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Clients Say About Me"}
      />
      <section className="testimonial-section fad-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <p>
                    <i className='fa fa-quote-left' />
                    I patronized Delmond and when He delivered, I honestly fell
                    in love with the project He is a very honest guy and he
                    delivers on time.
                    <i className='fa fa-quote-right' />
                    
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt'/>
                      </li>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                    </ul>
                  </p>
                </div>

                <div className='client-info'>
                  <img src="img/daisy.png" alt='no internet connection' />
                  <h5>Daisy Dominic</h5>
                  <p>CEO Oprime</p>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <p>
                    <i className='fa fa-quote-left' />
                    I patronized Delmond and when He delivered, I honestly fell
                    in love with the project He is a very honest guy and he
                    delivers on time.
                    <i className='fa fa-quote-right' />
                    
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt'/>
                      </li>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                    </ul>
                  </p>
                </div>

                <div className='client-info'>
                  <img src="img/mike.png" alt='no internet connection' />
                  <h5>Mike Thomson</h5>
                  <p>Digital Marketer</p>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <p>
                    <i className='fa fa-quote-left' />
                    I patronized Delmond and when He delivered, I honestly fell
                    in love with the project He is a very honest guy and he
                    delivers on time.
                    <i className='fa fa-quote-right' />
                    
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt'/>
                      </li>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                    </ul>
                  </p>
                </div>

                <div className='client-info'>
                  <img src="img/lady.png" alt='no internet connection' />
                  <h5>Eleanor Scott</h5>
                  <p>Graphics Designer</p>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <p>
                    <i className='fa fa-quote-left' />
                    I patronized Delmond and when He delivered, I honestly fell
                    in love with the project He is a very honest guy and he
                    delivers on time.
                    <i className='fa fa-quote-right' />
                    
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt'/>
                      </li>
                      <li>
                        <i className='fa fa-star'/>
                      </li>
                    </ul>
                  </p>
                </div>

                <div className='client-info'>
                  <img src="img/man.png" alt='no internet connection' />
                  <h5>Aderson Bugman</h5>
                  <p>Cybersecurity Expert</p>
                </div>
              </div>

            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;