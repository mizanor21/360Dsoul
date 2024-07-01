import { Link } from "react-router-dom";

const GrowProfessional = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            Grow as a person and a professional
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
          <div className="duration-300 transform bg-white border-l-4 border-primary hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">
                Jumpstart your future
              </h6>
              <p className="text-sm text-gray-900 mb-2">
                Student or recent graduate—we have programs to help you build
                your skills and launch your career ready to succeed.
              </p>
              <Link to="/" className="text-primary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-primary hover:-translate-y-2 ">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Fuel your career</h6>
              <p className="text-sm text-gray-900">
                Explore self-directed training, mentoring, and on-the-job
                learning. Have a goal? We’ll help you reach it. Need direction?
                Let’s make a plan.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-primary hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">
                Embrace inclusion
              </h6>
              <p className="text-sm text-gray-900">
                Oracle’s culture of inclusion empowers ideas and makes diverse
                voices heard on our journey to acceptance and opportunities for
                all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowProfessional;
