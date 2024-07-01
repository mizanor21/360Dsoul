import { Link } from "react-router-dom";

const CareerOpportunity = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className=" container mx-auto">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
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
          Featured opportunities
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto">
          <div className="block lg:flex bg-white rounded-md p-6">
            <div className="flex justify-center ">
              <img
                src="https://www.oracle.com/a/ocom/img/rc66-careers-oci.jpg"
                className="min-w-32 rounded-xl"
              ></img>
            </div>

            <div className="ml-8">
              <h1 className="text-lg font-bold">Oracle Cloud Infrastructure</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                minima deleniti, facere unde quam fugiat debitis eos eveniet
                alias qui.
              </p>
              <div className="mt-4">
                <Link to="/" className="text-blue-700 ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="block lg:flex bg-white rounded-md p-6">
            <div className="flex justify-center ">
              <img
                src="https://www.oracle.com/a/ocom/img/rc66-careers-oci.jpg"
                className="min-w-32 rounded-xl"
              ></img>
            </div>

            <div className="ml-8">
              <h1 className="text-lg font-bold">Oracle Cloud Infrastructure</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                minima deleniti, facere unde quam fugiat debitis eos eveniet
                alias qui.
              </p>
              <div className="mt-4">
                <Link to="/" className="text-blue-700 ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunity;
