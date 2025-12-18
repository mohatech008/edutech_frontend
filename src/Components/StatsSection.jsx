import React from "react";
const StatsSection = () => {
  const stats = [
    { number: "300+", label: "Courses offered" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "100+", label: "Mentor Experts" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "20+", label: "Years of Experience" },
  ];
  return (
    <div className="w-full bg-white py-12 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 lg:flex lg:justify-between lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center lg:flex-1"
            >
              {/*Number*/}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
                {stat.number}
              </h3>
              {/*Label*/}
              <p className="mt-2 text-sm sm:text-base font-medium text-gray-500">
                {stat.label}
              </p>
              {/*Divider Line*/}
              {index !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-[1px] bg-gray-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
