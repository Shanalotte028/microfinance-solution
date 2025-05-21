import { Link } from "react-router-dom";
import Modules from "../Components/Modules.jsx";
import City from "../assets/svgs/Finance leaders-rafiki.svg";

const Home = () => {
  return (
    <>
      <img src={City} alt="city-bg" className="fixed z-0 -top-5 right-10 w-[650px] opacity-65" />
      <div className="px-20 py-16 text-white gradient">
        
        <p className="text-5xl noto-serif relative">
          A Complete Platform for Managing 
        </p>
        <p className="text-5xl noto-serif relative">
          Modern Microfinance Operations
        </p>
        <p className="text-2xl noto-serif mt-10 relative">
          Streamline loans, customer onboarding, repayments, and reporting 
        </p>
        <p className="text-2xl noto-serif relative">
          — all from one secure, easy-to-use dashboard.
        </p>

        <div className="flex justify-center gap-8 text-black mt-20 relative">
          <Link
            to="/features"
            className="text-xl bg-white py-4 px-6 rounded-full font-medium text-[#00446b]"
          >
            See Features
          </Link>
          <Link
            to="/demo"
            className="text-xl text-white py-4 px-6 rounded-full font-medium gradient outline"
          >
            Request a Demo
          </Link>
        </div>
      </div>

      <div className="py-12 flex flex-col items-center px-64 bg-white relative">
        <h3 className="italic text-center text-lg">
          Designed for bus transit companies — our system simplifies operations,
          improves efficiency, and reduces costs.
        </h3>
        <h1 className="font-semibold text-4xl mt-20 mb-10 text-center">
          Core Modules
        </h1>
        <Modules />
      </div>
    </>
  );
};

export default Home;
