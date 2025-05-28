import HumanResourceI from "../assets/svgs/Profiling-pana.svg";
import CoreI from "../assets/svgs/Coins-bro.svg";
import AdminI from "../assets/svgs/Admin-rafiki.svg";
import Finance from "../assets/svgs/Finance-leaders-pana.svg";
import LogisticsI from "../assets/svgs/Logistics-rafiki.svg";

import Bus from "../assets/svgs/city-bus-rafiki.svg";

export const modules = [
  {
    name: "Human Resources",
    desc: "Manage employee profiles, attendance tracking, payroll processing, and organizational roles",
    illustration: HumanResourceI,
    links: [
      "https://hr1.microfinance-solution.com",
      "https://hr2.microfinance-solution.com",
      "https://hr3.microfinance-solution.com",
      "https://hr4.microfinance-solution.com",
    ]
  },
  {
    name: "Administration",
    desc: "Handle user access, risk assessment, and compliance configurations",
    illustration: AdminI,
    links: [
      "https://admin.microfinance-solution.com",
    ]
  },
  {
    name: "Finance",
    desc: "Oversee loan disbursement, collections, accounting, budget planning, and financial reporting",
    illustration: Finance,
    links: [
      "https://finance.microfinance-solution.com",
    ]
  },
  {
    name: "Logistics",
    desc: "Manage office inventory, document tracking, facility operations, and vendor coordination",
    illustration: LogisticsI,
    links: [
      "https://logistic1.microfinance-solution.com",
      "https://logistic2.microfinance-solution.com",
    ]
  },
  {
    name: "Core Operations",
    desc: "Support client onboarding and loan application workflows",
    illustration: CoreI,
    links: [
      "https://core1.microfinance-solution.com",
      "https://core2.microfinance-solution.com",
    ]
  },
];

const Modules = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 px-4">
      {modules.map((module, index) => (
        <div
          key={index}
          className="cursor-pointer overflow-hidden relative flex flex-col items-center px-10 py-10 border-[#332D2D] border-b-4 shadow border-2 rounded-3xl group hover:shadow-[#332D2D]/30 hover:shadow-xl duration-200"
          style={{ flex: '0 0 calc(33.333% - 2rem)', maxWidth: 'calc(33.333% - 2rem)', minWidth: '300px' }}
        >
          {/* Optional hover background image */}
          {/* <img
            src={Bus}
            alt={module.name}
            className="absolute -bottom-6 -left-8 z-0 w-2/3 opacity-0 group-hover:opacity-20 duration-200"
          /> */}

          {/* Illustration */}
          <img
            src={module.illustration}
            alt={module.name}
            className="w-40 z-10 mb-4 group-hover:drop-shadow-[0_4px_8px_#FFC100] group-hover:scale-105 duration-200"
          />

          {/* Name and Description */}
          <p className="text-2xl font-semibold z-10 text-center">{module.name}</p>
          <p className="mt-4 text-center z-10">{module.desc}</p>
        </div>
      ))}
    </div>
  );
};





export default Modules;
