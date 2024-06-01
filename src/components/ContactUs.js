import Section from "./Section";
import Heading from "./Heading";
import { robot1 } from "../assets";
import { PhotoChatMessage, Gradient } from "./design/ContactDesign";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { loading } from "../assets";
import { useForm } from "react-hook-form";
import Generating from "./Generating";
import { AnimatePresence, motion} from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
    reset,
    clearErrors,
  } = useForm({ mode: "onTouched" });

  const sendEmail = (e) => {
    emailjs
      .sendForm("service_nxaed11", "template_juxwvh7", form.current, {
        publicKey: "LGrlv2ne2fUbP9CaW",
      })
      .then(
        () => {
          setIsOpen(true);
          disablePageScroll();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    reset();
    clearErrors();

    if(isSubmitting || isSubmitted || isSubmitSuccessful){
      enablePageScroll();
    }
  };

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
              <form
                ref={form}
                className="p-15"
                onSubmit={handleSubmit(sendEmail)}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                      for="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200/5 target:text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-200 visited:text-n-1 ${
                        errors.firstName && "border-red-500"
                      }`}
                      id="firstName"
                      type="text"
                      placeholder="Jane"
                      {...register("firstName", {
                        required: true,
                        maxLength: 50,
                      })}
                      aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs italic">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                      for="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200/5 target:text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-200 visited:text-n-1 ${
                        errors.lastName && "border-red-500"
                      }`}
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      {...register("lastName", {
                        required: true,
                        maxLength: 50,
                      })}
                      aria-invalid={errors.lastName ? "true" : "false"}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs italic">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                      for="email"
                    >
                      Email Address
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200/5 target:text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-200 visited:text-n-1 ${
                        errors.email && "border-red-500"
                      }`}
                      id="email"
                      type="email"
                      placeholder="********@*****.**"
                      {...register("email", {
                        required: true,
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs italic">
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                      for="website"
                    >
                      Website
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200/5 target:text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-200 visited:text-n-1 ${
                        errors.website && "border-red-500"
                      }`}
                      id="website"
                      type="text"
                      placeholder="www.mycompany.com"
                      {...register("website", {
                        required: false,
                        pattern:
                          /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
                      })}
                    />
                    {errors.website && (
                      <p className="text-red-500 text-xs italic">
                        Please enter a valid website URL.
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                      for="message"
                    >
                      Your Message
                    </label>
                    <textarea
                      rows="10"
                      className={`appearance-none block w-full bg-gray-200/5 target:text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-200 visited:text-n-1 ${
                        errors.firstName && "border-red-500"
                      }`}
                      id="message"
                      {...register("message", {
                        required: true,
                        minLength: 3,
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs italic">
                        Please enter a valid message.
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <div className="md:flex md:items-center">
                      <label
                        className="block text-n-2 font-bold"
                        for="newscheck"
                      >
                        <input
                          className="mr-2 leading-tight"
                          id="newscheck"
                          type="checkbox"
                          {...register("newscheck", {
                            required: false,
                          })}
                        />
                        <span className="text-sm">
                          Send me your newsletter!
                        </span>
                      </label>
                    </div>
                    <button
                      className="shadow bg-indigo-800 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded transition ease-in-out delay-150 hover:-translate-y-0.7 hover:scale-110 duration-300 flex"
                      type="submit"
                    >
                      <img
                        className={`hidden w-5 h-5 mr-4 animate-spin ${isSubmitting && "block"}`}
                        src={loading}
                        alt="Loading"
                      />
                      Send Message
                    </button>
                    <ModalDesign isOpen={isOpen} setIsOpen={setIsOpen} />
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

              <PhotoChatMessage />
            </div>
            {/* Map right hand side */}
            <div className="bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <iframe
                title="SyberKonsult Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.0851060846935!2d28.052090300000003!3d-26.096140400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95733b19c478ef%3A0xb30e57e2cf5e82d5!2sSunset%20Towers%2C%20Benmore%20Rd%2C%20Morningside%2C%20Sandton%2C%202057%2C%20South%20Africa!5e0!3m2!1sen!2suk!4v1716936832575!5m2!1sen!2suk"
                className="w-full h-full rounded-3xl overflow-hidden lg:min-h-[46rem]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
                aria-hidden="false"
                tabindex="0"
                style={{ filter: "invert(90%)" }}
              />
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;

const ModalDesign = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setIsOpen(false)
            enablePageScroll()
          }}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <SiMinutemailer />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Message Sent!
              </h3>
              <p className="text-center mb-6">
                Thank you for reaching out to SyberKonsult, we'll be in touch
                shortly!
              </p>
              <div className="flex">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    enablePageScroll();
                  }}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  type="button"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
