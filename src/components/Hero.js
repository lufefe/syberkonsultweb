import React, { useRef } from "react";
import Section from "./Section";
// import { robot6 } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/HeroDesign";
// import { heroIcons } from "../constants";
// import { ScrollParallax } from "react-just-parallax";
// import Notification from "./Notification";
// import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section className="pt-[8rem] -mt-[5.25]" customPaddings id="home">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            To foster and deliver unparalleled digital transformation and
            security assurance. {` `} <br />
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Our key focus is in-depth protection of IT assets and enhancing the
            overall security of our clients’ infrastructure, ensuring compliance
            and good governance.
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <iframe
                  className="w-full h-full"
                  src="https://cybermap.kaspersky.com/en/widget/dynamic/dark"
                  frameborder="0"
                  title="Kaspersky Live Cyberthreat Map"
                ></iframe>
                {/* <img
                  src={robot6}
                  className="w-full scale-1.7 translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="by freepik"
                /> */}

                {/* <ScrollParallax isAbsolutelyPositioned> */}
                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"/> */}
                {/* </ScrollParallax> */}

                {/* <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[5.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                    <Notification className="hidden absolute -right-[5.5rem] bottom-[16.5rem] w-[18rem] xl:flex" title="Latest blog post"/>
                </ScrollParallax> */}
              </div>
            </div>
            <Gradient />
          </div>

          <BackgroundCircles />
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
