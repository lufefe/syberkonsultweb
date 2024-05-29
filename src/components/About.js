import { syberkonsult_transp, check } from "../assets";
import { teamPics, aboutContent, aboutText } from "../constants";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/AboutDesign";

const About = () => {
  return (
    <Section crosses id="about">
      <div className="container lg:flex">
        <div className="max-w-[28rem]">
          <h2 className="h2 mb-4 md:mb-8">About</h2>
          <div className="mb-4">{aboutText}</div>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {aboutContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* right-side collab apps - to be team section */}
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto text-center">
            Our Team
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={syberkonsult_transp}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {teamPics.map((member, index) => (
                <li
                  key={member.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[2.5rem] origin-bottom rotate-${
                    index * 90
                  }`}
                >
                  <div
                    className={`relative -top-[2rem] flex w-[5rem] h-[5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 90
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={member.width}
                      height={member.height}
                      alt={member.title}
                      src={member.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
