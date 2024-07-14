import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Main,
  OurStory,
  Blog,
  PrivacyPolicy,
  TermsOfService,
  Careers,
  CEO,
  CFO,
  CTO,
  Counsel,
  PageNotFound,
  BlogDetail
} from "../pages";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail/:id" element={<BlogDetail />} />
        <Route path="/ceo" element={<CEO />} />
        <Route path="/cfo" element={<CFO />} />
        <Route path="/cto" element={<CTO />} />
        <Route path="/counsel" element={<Counsel />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
