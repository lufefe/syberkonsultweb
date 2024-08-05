import React from "react";
import Section from "./Section";
import { footerlinks, socials } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      {/* <p className="font-thin text-n-4 ml-2">
        Disclaimer: some of the content in this website is for placeholder
        purposes and doesn't represent accurate information (i.e our clients section).
      </p> */}

      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. SyberKonsult (Pty) Ltd.
        </p>
        {/* FOOTER LINKS */}
        <ul className="flex gap-14 flex-wrap justify-center">
          {footerlinks.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="flex items-center justify-center h-10 text-n-4 transition-colors hover:text-n-1"
            >
              {item.title}
            </Link>
          ))}
        </ul>

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
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </Link>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
