import React from "react";

const Coursesection = () => {
  const courses = [
    {
      id: 1,
      category: "Cloud Computing",
      title: "Mastering core cloud computing fundamentals",
      instructor: "Mohamed Abdi",
      price: "Free",
      tag: "Development",
      rating: 5.0,
      tagstyle: "bg-[#F7C5C5]",
      image: "Images/cloud-course.png",
      bgColor: "bg-[#FFFFFF]",
    },
    {
      id: 2,
      category: "Programming Course",
      title: "Swift programming for iOS app development",
      instructor: "Juma Said",
      price: "KES.2500",
      tag: "Development",
      rating: 4.0,
      tagStyle: "bg-[#FED8B9]",
      image: "Images/swift-course.png",
      bgColor: "bg-[#FFFFFF]",
    },
    {
      id: 3,
      category: "Cloud Computing Course",
      title: "Mastering core cloud computing fundamentals",
      instructor: "Joyce Kamau",
      price: "KES.3200",
      tag: "Development",
      rating: 5.0,
      tagstyle: "bg-[#CFD4FA]",
      image: "Images/data-course.png",
      bgColor: "bg-[#FFFFFF]",
    },
  ];
  return (
    <div className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <h4 className="text-[#0F1A4F] font-bold uppercase tracking-wide text-sm mb-2">
            Courses
          </h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F1A4F] mb-4">
            Dive into Our Courses
          </h2>
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            Explore Engaging Lessons, Tailored programs, and Hands-on Learning
            Experiences that Empower You to Unlock Your Full Potential and
            Achieve Success in Your Educational Journey.
          </p>
        </div>
        {/*Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/*Card Image Area */}
              <div
                className={`w-full ${course.bgColor} relative flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/*Card Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                {/*category*/}
                <span className="text-xs font-medium text-gray-500 mb-2">
                  {course.category}
                </span>
                {/*Title*/}
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[56px]">
                  {course.title}
                </h3>
                {/*Instructor & Price Row */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 font-medium">
                      {course.instructor}
                    </span>
                  </div>
                  <span className="text-black font-bold text-sm">
                    {course.price}
                  </span>
                </div>
                {/*Footer:Tag & Rating */}
                <div className="mt-auto flex justify-between items-center">
                  {/*Tag Pill*/}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${course.tagStyle}`}
                  >
                    {course.tag}
                  </span>
                  {/*Rating*/}
                  <div className="flex items-center gap-1">
                    {/*The Number*/}
                    <span className="text-black font-bold text-sm mr-1">
                      {course.rating.toFixed(1)}
                    </span>
                    {/*Logic To generate Stars*/}
                    {[...Array(Math.round(course.rating))].map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const StarIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.23421L7.5 0L5.3925 5.23421L0 5.71579L4.095 9.45L2.865 15L7.5 12.0553Z"
      fill="#FF9100"
    />
  </svg>
);

export default Coursesection;
