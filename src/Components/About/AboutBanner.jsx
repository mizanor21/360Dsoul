import "./AboutBanner.css";

const AboutBanner = () => {
  return (
    <div className="about-banner">
      <div className="container mx-auto  flex items-center h-full">
        <h1 className="text-white  text-2xl lg:text-4xl font-light font-serif lg:max-w-[800px]">
          Our mission is to help people see data in new ways, discover insights,
          unlock endless possibilities.
        </h1>
      </div>
    </div>
  );
};

export default AboutBanner;
