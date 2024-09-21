import React from "react";
import Section from "./Section";
import { footerlinks, socials } from "../constants";
import { skLogoOnly } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      {/* <p className="font-thin text-n-4 ml-2">
        Disclaimer: some of the content in this website is for placeholder
        purposes and doesn't represent accurate information (i.e our clients section).
      </p> */}

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center sm:col-span-2">
            {/* Form */}
            <h3 class="max-w-lg text-lg font-semibold tracking-tight xl:text-xl dark:text-white">
              Subscribe to our newsletter to get cyber updates.
            </h3>
            <p className="caption text-n-4 lg:block">
              Click link below or scan the QR Code.
            </p>
            <div className="flex flex-row gap-4 justify-center items-center mt-3">
              <a
                href="https://zc.vg/sf/bpL1x"
                target="_blank"
                rel="noreferrer"
                className="mb-4 text-n-4 transition-colors hover:text-n-1"
              >
                <p className="text-xl">Subscribe</p>
              </a>
              <div class="inline-block h-[150px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
              <img
                className="block m-auto transition select-none"
                src="https://campaigns.zoho.com/campaigns/org860772204/QRcodeGenerator.do?tD=11285b433ff04a7a9&amp;sD=11285b433ff04b361&amp;height=100&amp;width=100"
                alt="QR"
              />
            </div>
            {/* Form end */}
          </div>
          <div>
            <p class="font-semibold text-gray-800 dark:text-white">Company</p>

            <div class="mt-4">
              {/* FOOTER LINKS */}
              <ul>
                {footerlinks.map((item) => (
                  <Link
                    key={item.id}
                    to={item.url}
                    className="flex flex-col items-start space-y-2 text-n-4 transition-colors hover:text-n-1"
                  >
                    {item.title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p class="font-semibold text-gray-800 dark:text-white">Resources</p>

            <div class="flex flex-col items-start mt-4">
              <a
                href="https://www.canva.com/design/DAGOaVQDpRk/UGIJy9dd_S03plKsEjLLFg/view?utm_content=DAGOaVQDpRk&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                target="_blank"
                class=" text-n-4 transition-colors hover:text-n-1"
                rel="noreferrer"
              >
                2024 Cybersecurity Report
              </a>
              <Link
                to="/blog"
                class=" text-n-4 transition-colors hover:text-n-1"
              >
                SyberBlog
              </Link>

              <a
                href="https://www.cybersecurityhub.gov.za"
                target="_blank"
                class=" text-n-4 transition-colors hover:text-n-1"
                rel="noreferrer"
              >
                The Cybersecurity Hub
              </a>
              <a
                href="https://www.ssa.gov.za/CSIRT"
                target="_blank"
                rel="noreferrer"
                class="text-n-4 transition-colors hover:text-n-1"
              >
                SSA - CSIRT
              </a>
            </div>
          </div>
        </div>

        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div class="flex items-center justify-between">
          <a href="/">
            <img class="w-auto h-16" src={skLogoOnly} alt="SyberKonsult logo" />
          </a>

          {/* <p>SyberKonsult is a B-BBEE LEVEL 1 CONTRIBUTOR</p> */}

          <div class="flex -mx-2">
            {/* SOCIAL MEDIA ICONS */}
            <ul className="flex gap-5 flex-wrap justify-center">
              {socials.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <img
                    src={item.iconUrl}
                    width={16}
                    height={16}
                    alt={item.title}
                  />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
