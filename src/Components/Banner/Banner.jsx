import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Banner.css";

const Banner = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=" services"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {/* Add your actual content here */}
      <div className="banner-bg">
        <div className="grid grid-cols-1 lg:grid-cols-1 ">
          <div className="card lg:card-side shadow-lg border-b border-blue-300 lg:max-w-6xl lg:container lg:mx-auto justify-center items-center lg:mt-20 bg-white opacity-80">
            <div>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  className="opacity-80 p-5"
                  alt="Album"
                />
              </figure>
            </div>

            <div>
              <div className="card-body">
                <h2 className="text-black font-extrabold text-6xl">
                  Welcome to{" "}
                  <span className="text-blue-400">360D SOUL LTD</span>
                </h2>
                <p className="font-bold text-2xl">
                  Oracle Cloud Analytics crunches reams of data to inform two
                  Premier League awards
                </p>
              </div>
              <div className="ml-8">
                <button className=" btn bg-blue-400 text-white mr-5">
                  Read More
                </button>
                <button className="btn btn-outline btn-info text-white">
                  Explore Our Cloud
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
