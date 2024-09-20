import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { Helmet } from "react-helmet-async";
import Report from "../assets/general/SyberKonsult_2024_Cybersecurity_Report.pdf";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ReportDownload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      termscheck: true,
    },
  });

  const onSubmit = () => {
    emailjs
      .sendForm("service_5qw3n2x", "template_mmtmj3c", form.current, {
        publicKey: "VBai9QxVrIKJo5wqB",
      })
      .then(
        () => {
          const pdfUrl = Report;
          const link = document.createElement("a");
          link.href = pdfUrl;
          link.download = "SyberKonsult - 2024 Cybersecurity Report.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          alert("Thank you for downloading our report. Happy reading!");
        },
        (error) => {
          alert(
            "There has been an error downloading the file. Please try again late or read the report from the home page."
          );
        }
      );
    reset();
    clearErrors();
  };

  return (
    <>
      <Helmet>
        <title>2024 Cybersecurity Report Download</title>
        <meta
          name="description"
          content="SyberKonsult | 2024 Cybersecurity Report Download"
        />
        <link
          rel="canonical"
          href="https://www.syberkonsult.co.za/2024cybersecurityreport"
        />
      </Helmet>
      <Section className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col justify-center items-center relative"
        >
          <p class="text-3xl font-bold text-zinc-950 dark:text-white text-center">
            Download our{" "}
            <span className="text-indigo-500">2024 Cybersecurity Report</span>
          </p>
          <p class="mb-2.5 mt-2.5 font-grotesk text-zinc-950 dark:text-zinc-400 text-center">
            Enter your name and email to download
          </p>

          <div class="mt-8 lg:w-96 max-w-96">
            <form
              ref={form}
              class="max-w-sm mx-auto"
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
              action="submit"
            >
              <input
                type="text"
                id="message"
                value="Cybersecurity report download lead."
                hidden
                {...register("message", {
                  required: false,
                })}
              />
              <div class="mb-5">
                <label
                  for="firstName"
                  class="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="name"
                  id="firstName"
                  class="aappearance-none block w-full bg-gray-200/5 target:text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-200 visited:text-n-1 "
                  placeholder="Jane Doe"
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
              <div class="mb-5">
                <label
                  for="email"
                  class="block uppercase tracking-wide text-n-2 text-xs font-bold mb-2"
                >
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  aria-describedby="helper-text-explanation"
                  class="appearance-none block w-full bg-gray-200/5 target:text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-200 visited:text-n-1 "
                  placeholder="********@*****.**"
                  {...register("email", {
                    required: true,
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    {...register("termscheck", {
                      required: false,
                    })}
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  for="terms"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a href="/termsofservice" class="underline">
                    terms of service.
                  </a>
                </label>
              </div>
              <button
                type="submit"
                class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Download
              </button>
            </form>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default ReportDownload;
