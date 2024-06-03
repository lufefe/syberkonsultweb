import { companyLogos } from "../constants";
import { AnimatePresence, motion } from "framer-motion";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Our clients
      </h5>
      <ul className="flex gap-10">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-white/90 hover:backdrop-blur rounded"
            
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;