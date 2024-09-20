import ButtonGradient from "./assets/customsvg/ButtonGradient";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
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
  BlogDetail,
  ReportDownload,
} from "../src/pages";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <NavBar />

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
            <Route
              path="/2024cybersecurityreport"
              element={<ReportDownload />}
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
