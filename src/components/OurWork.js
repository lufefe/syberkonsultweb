import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { ourwork } from "../constants";
import { Gradient } from "./design/ContactDesign";

const Roadmap = () => (
  <Section className="overflow-hidden" id="ourwork">
    <div className="container md:pb-10">
      <Heading tag="See what we got going" title="Our Work" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {ourwork.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.topic}</Tagline>
                
                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <div className="tagline">{item.industry}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15 px-4">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient/>
      </div>
    {/* //todo repurpose the button */}
      {/* <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div> */}

    </div>
  </Section>
);

export default Roadmap;