import Section from "./Section";
import Heading from "./Heading";
import { robot1} from "../assets";
import { PhotoChatMessage, Gradient } from "./design/ContactDesign";

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
              {/* CONTACT FORM // todo : implement send email functionality */}
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
                      class="appearance-none block w-full bg-gray-200/5 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 focus:text-n-1"
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
                      class="appearance-none block w-full bg-gray-200/5 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 focus:text-n-1"
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
                      class="appearance-none block w-full bg-gray-200/5 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500 focus:text-n-1"
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
                      class="appearance-none block w-full bg-gray-200/5 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500 focus:text-n-1"
                      id="grid-email"
                      type="text"
                      placeholder="www.mycompany.com"
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
                      class="appearance-none block w-full bg-gray-200/5 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500 focus:text-n-1"
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
                      class="shadow bg-indigo-800 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded transition ease-in-out delay-150 hover:-translate-y-0.7 hover:scale-110 duration-300"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
          {/* left contact section */}
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
                <Generating />
              </div>

              <PhotoChatMessage/>
            </div>
            {/* Map right hand side */}
            <div className="bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
            
              <iframe title="SyberKonsult Office" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.0851060846935!2d28.052090300000003!3d-26.096140400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95733b19c478ef%3A0xb30e57e2cf5e82d5!2sSunset%20Towers%2C%20Benmore%20Rd%2C%20Morningside%2C%20Sandton%2C%202057%2C%20South%20Africa!5e0!3m2!1sen!2suk!4v1716936832575!5m2!1sen!2suk" className="w-full h-full rounded-3xl overflow-hidden lg:min-h-[46rem]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0" aria-hidden="false" tabindex="0" style={{filter:"invert(90%)"}} />

            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
