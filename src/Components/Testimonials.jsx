import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah L.",
      role: "Dta Analyst",
      image: "Images/profile1.png",
      quote:
        "EduNova revolutionized my learning experience with its innovative approach. The interactive courses, combined with expert instructors, provided me with practical skills that I could immediately apply in my career.",
    },
    {
      id: 2,
      name: "John M.",
      role: "Software Engineer",
      image: "Images/profile2.png",
      quote:
        "I was amazed by how engaging EduNova's is. The flexibility to learn at my own pace, coupled with the support from  mentors, helped me excel . The platform’s  interactive content transformed my learning journey.",
    },

    {
      id: 3,
      name: "Michael T.",
      role: "Marketing Specialist",
      image: "Images/profile3.png",
      quote:
        "Joining EduNova was the best decision I made for my growth. The courses are meticulously structured and the community support is exceptional. The interactive elements and guidance helped me gain skills that have opened new opportunities.",
    },
  ];
  return (
    <div className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/*---Header Section---*/}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4">
            Read <span className="text-[#2266BE]">Testimonials</span> from Our
            <br className="hidden md:block" />
            Community of Learners
          </h2>
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            Our community of learners has shared their experiences and successes
            with us, providing valuable insights into the impact of our courses.
            Read their testimonials to see how our programs have helped them
            grow and achieve their goals.
          </p>
        </div>
        {/*--Cards Grid--*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item) => (
            <div key={item.id} className="pt-10">
              {/*Card container*/}
              <div className="relative bg-white border-2 border-[#72AFFD] rounded-[20px] shadow-md p-6 pt-10 w-full h-full flex flex-col text-center">
                {/*Floating profile Image*/}
                <div className="absolute -top-10 left-1/4 transform-translate-x-1/4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[50%] h-[50%] object-cover rounded-full border-4 border-white"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                {/*Quote Text*/}
                <p className="text-gray-600 text-center text-sm  mb-6 flex-grow px-2">
                  {item.quote}
                </p>
                {/*Name/Role & Quote Icon */}
                <div className="flex justify-between items-end mt-auto  border-t border-transparent w-full pt-4">
                  <div className="text-left">
                    <h4 className="font-bold text-black text-base">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                  {/*Quote Icon */}
                  <QuoteIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const QuoteIcon = () => (
  <svg
    width="57"
    height="40"
    viewBox="0 0 57 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_42_308)">
      <path
        d="M14.6737 28.3667L13.3337 28.6334V33.3334H15.0003C19.6387 33.3334 23.177 32.0484 25.5153 29.5134C28.6603 26.1001 28.3437 21.7167 28.3337 21.6667V8.33341C28.3337 7.89139 28.1581 7.46746 27.8455 7.1549C27.5329 6.84234 27.109 6.66675 26.667 6.66675H15.0003C13.162 6.66675 11.667 8.16175 11.667 10.0001V21.6667C11.667 22.1088 11.8426 22.5327 12.1551 22.8453C12.4677 23.1578 12.8916 23.3334 13.3337 23.3334H20.1303C20.0944 24.1573 19.8482 24.9582 19.4153 25.6601C18.5703 26.9951 16.9753 27.9051 14.6737 28.3667Z"
        fill="#FCC21B"
      />
    </g>
    <g clip-path="url(#clip1_42_308)">
      <path
        d="M33.5438 28.3667L32.2038 28.6334V33.3334H33.8704C38.5088 33.3334 42.0471 32.0484 44.3854 29.5134C47.5304 26.1001 47.2138 21.7167 47.2038 21.6667V8.33341C47.2038 7.89139 47.0282 7.46746 46.7156 7.1549C46.4031 6.84234 45.9791 6.66675 45.5371 6.66675H33.8704C32.0321 6.66675 30.5371 8.16175 30.5371 10.0001V21.6667C30.5371 22.1088 30.7127 22.5327 31.0253 22.8453C31.3378 23.1578 31.7617 23.3334 32.2038 23.3334H39.0004C38.9645 24.1573 38.7184 24.9582 38.2854 25.6601C37.4404 26.9951 35.8454 27.9051 33.5438 28.3667Z"
        fill="#0F1A4F"
      />
    </g>
    <defs>
      <clipPath id="clip0_42_308">
        <rect width="37.74" height="40" fill="white" />
      </clipPath>
      <clipPath id="clip1_42_308">
        <rect
          width="37.74"
          height="40"
          fill="white"
          transform="translate(18.8701)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default Testimonials;
