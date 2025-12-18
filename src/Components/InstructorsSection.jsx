import React from "react";

const InstructorsSection = () => {
  //Mentor Data
  const mentors = [
    {
      id: 1,
      name: "Mentor 1",
      personImage: "Images/mentor1.png",
      blobImage: "Images/blob1.png",
    },
    {
      id: 2,
      name: "Mentor 2",
      personImage: "Images/mentor2.png",
      blobImage: "Images/blob2.png",
    },
    {
      id: 3,
      name: "Mentor 3",
      personImage: "Images/mentor3.png",
      blobImage: "Images/blob3.png",
    },
    {
      id: 4,
      name: "Mentor 4",
      personImage: "Images/mentor4.png",
      blobImage: "Images/blob4.png",
    },
  ];
  return (
    <div className="relative w-full h-auto py-16 lg:py-24 overflow-hiddden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF6D2]  to-[#FCC21BB2]" />
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/*Left Section */}
          <div className="w-full lg:w-1/2 flex justify-center mb-20 lg:mb-0">
            <div className="grid grid-cols-2 gap-6 sm:gap-12 max-w-[500px]">
              {mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex items-end justify-center group"
                >
                  {/*The Blob background Image*/}
                  <img
                    src={mentor.blobImage}
                    alt="Backgroung Shape"
                    className="absolute inset-0 w-full h-full object-fill z-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  {/*The Mentor Image */}
                  <img
                    src={mentor.personImage}
                    alt={mentor.name}
                    className="relative z-10 w-[85%] h-[85%] object-contain object-bottom group-hover:translate-y-2 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/*Right Column:Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h4 className="text-[#0F1A4F] font-bold uppercase tracking-widest text-sm mb-3">
              Meet Your Mentors
            </h4>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl lg:text-3xl font-extrabold text-black">
                Expert Guidance
              </h2>
              {/*Pen Nib Icon */}
              <svg
                width="31"
                height="36"
                viewBox="0 0 31 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9363 3.62071L26.8096 11.4957C27.271 11.9569 27.5869 12.5434 27.7181 13.1824C27.8493 13.8215 27.7902 14.485 27.548 15.0907L23.6063 24.9457C23.3852 25.4974 23.0205 25.9799 22.5502 26.3433C22.0799 26.7067 21.5209 26.9377 20.9313 27.0124L12.4663 28.0707C12.2485 28.0963 12.0207 28.1274 11.783 28.164L11.043 28.284L10.6563 28.354L9.45129 28.5874L8.6263 28.7624L7.38463 29.0424L5.79296 29.4224L3.20629 30.0824L2.12963 30.3724C1.85792 30.4471 1.5718 30.4524 1.29751 30.3878C1.02322 30.3232 0.769534 30.1908 0.559708 30.0027C0.349883 29.8146 0.190635 29.5768 0.0965652 29.3112C0.00249545 29.0456 -0.0233853 28.7606 0.0212952 28.4824L0.0779618 28.239L0.569629 26.3857L1.00963 24.639L1.38963 23.0474L1.66796 21.8057L1.84296 20.979L2.07796 19.7757L2.2113 19.014L2.31796 18.3007L3.41796 9.50071C3.49283 8.91089 3.72408 8.35183 4.08776 7.88148C4.45144 7.41113 4.9343 7.04661 5.48629 6.82571L15.3413 2.88404C15.947 2.64182 16.6105 2.58266 17.2496 2.7139C17.8886 2.84515 18.4751 3.15935 18.9363 3.62071ZM12.753 12.9624C12.3319 13.3837 12.0314 13.9102 11.8828 14.487C11.7342 15.0639 11.7429 15.67 11.908 16.2424C11.7865 16.3135 11.6745 16.3997 11.5746 16.499L4.8113 23.2624C4.76697 23.3074 4.73634 23.364 4.72296 23.4257L4.57463 24.0674L4.27796 25.3057L4.13463 25.8907C4.11996 25.947 4.12025 26.0061 4.13549 26.0622C4.15072 26.1183 4.18036 26.1694 4.22147 26.2105C4.26258 26.2516 4.31372 26.2813 4.36982 26.2965C4.42593 26.3118 4.48504 26.312 4.5413 26.2974L5.73629 26.0057L7.00796 25.709C7.06926 25.6949 7.12531 25.6637 7.16963 25.619L13.933 18.8557C14.0321 18.7564 14.1184 18.645 14.1896 18.524C14.7544 18.6864 15.352 18.6966 15.922 18.5535C16.4919 18.4105 17.0139 18.1193 17.4351 17.7096C17.8562 17.2998 18.1616 16.786 18.3202 16.2202C18.4788 15.6543 18.485 15.0567 18.3382 14.4877C18.1914 13.9187 17.8968 13.3986 17.4842 12.9802C17.0717 12.5617 16.5558 12.2598 15.989 12.1049C15.4221 11.9501 14.8244 11.9478 14.2564 12.0984C13.6884 12.249 13.1703 12.5471 12.7546 12.9624H12.753ZM20.5163 0.489041C20.8031 0.201835 21.1848 0.0291422 21.5898 0.00336644C21.9949 -0.0224094 22.3954 0.100503 22.7163 0.349041L22.873 0.489041L29.9446 7.55904C30.2467 7.85828 30.423 8.26166 30.4374 8.68662C30.4518 9.11158 30.3033 9.52599 30.0222 9.84501C29.7411 10.164 29.3487 10.3635 28.9253 10.4027C28.5019 10.4419 28.0795 10.3177 27.7446 10.0557L27.5863 9.91571L20.5163 2.84571C20.2038 2.53316 20.0283 2.10931 20.0283 1.66737C20.0283 1.22543 20.2038 0.801587 20.5163 0.489041Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-lg">
              Our mentors are seasoned industry experts dedicated to guiding you
              with personalized support and real-world insights. With their
              expertise by your side, you'll have the confidence and knowledge
              to achieve your learning goals and excel in your chosen field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsSection;
