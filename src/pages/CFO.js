import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cfoProfile } from "../constants";
import cfo from "../assets/about/cfo.jpg";
import { Helmet } from "react-helmet-async";

const CFO = () => {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
    window.scrollTo(0, 0);
  });

  const setPath = (progress) => {
    const width = window.innerWidth * 0.7;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };
  return (
    <>
      <Helmet>
        <title>SyberKonsult | CFO</title>
        <meta
          name="description"
          content="SyberKonsult | Profile of our Chief Financial Officer"
        />
        <link rel="canonical" href="https://www.syberkonsult.co.za/CFO" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen w-[100vw] px-6 py-8 lg:flex items-center justify-center bg-black text-white sm:flex-wra"
      >
        <div className="relative flex mr-5 p-4 w-[auto]">
          <img src={cfo} alt="executive" width={350} height={350} />
        </div>
        {/* .container */}
        {cfoProfile.map((profile, index) => (
          <>
            <div className="relative lg:flex lg:flex-col lg:w-[65vw] mr-4 sm:m-0 items-center max-w-fit">
              {/* .body */}
              <h3 className="h3 text-center">{profile.name}</h3>
              <div
                onMouseEnter={() => {
                  manageMouseEnter();
                }}
                onMouseMove={(e) => {
                  manageMouseMove(e);
                }}
                onMouseLeave={() => {
                  manageMouseLeave();
                }}
                className=" lg:flex w-full relative z-5 h-[50px] block"
              >
                <svg className="w-full">
                  <path
                    ref={path}
                    className="stroke-current stroke-[1px] fill-none translate-y-[-225px]"
                  ></path>
                </svg>
              </div>{" "}
              {/* .box */}
              <div className="lg:flex justify-end sm:flex-wrap sm:justify-center">
                {/* .description */}
                <p className="font-bold text-base m-0 mr-3 sm:flex-wrap sm:mb-2 text-center">
                  {profile.title}
                </p>
                <p className="text-lg lg:w-[750px] lg:ml-7 sm:m-0 w-full">{profile.text}</p>
              </div>
              <div className="flex justify-end mt-12 sm:flex-wrap sm:justify-center">
                {/* .tagsContainer */}
                <p className="m-0 font-bold sm:mb-3">Key Areas</p>
                <div className="flex w-[700px] ml-7 flex-wrap gap-2 ">
                  {/* .tags */}
                  {profile.keyAreas.map((value) => (
                    <p
                      key={value.id}
                      className="border border-solid border-n-1 rounded-3xl uppercase text-base py-2 px-3"
                    >
                      {value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </motion.div>
    </>
  );
};

export default CFO;
