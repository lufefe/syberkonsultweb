import Section from "./Section";
import Heading from "./Heading";
import { robot1, robot4, service2, service3 } from "../assets";
import { brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="contact-us">
      <div className="container">
        <Heading
          title="Get In Touch"
          text="Let us help you achieve your desired security posture"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="relative z-1 w-full ml-auto">
              {/* CONTACT FORM */}
              <form class="p-15">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200/5 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                    <p class=" hidden text-red-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200/5 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Email Address
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200/5 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      placeholder="********@*****.**"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Website
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200/5 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="text"
                      placeholder="www.website.com"
                    />
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Your Message
                    </label>
                    <textarea
                      rows="10"
                      class="appearance-none block w-full bg-gray-200/5 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    ></textarea>
                  </div>
                  <div class="flex justify-between w-full px-3">
                    <div class="md:flex md:items-center">
                      <label class="block text-n-2 font-bold">
                        <input class="mr-2 leading-tight" type="checkbox" />
                        <span class="text-sm">Send me your newsletter!</span>
                      </label>
                    </div>
                    <button
                      class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={robot1}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={""}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
