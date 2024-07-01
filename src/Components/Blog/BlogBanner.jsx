import "./Blog.css";

const BlogBanner = () => {
  return (
    <div className="blog-banner">
      <div className="container mx-auto justify-center text-center flex items-center h-full">
        <h1 className="text-white  text-2xl lg:text-4xl font-light font-serif lg:max-w-[800px]">
          Our mission is to help people see data in new ways, discover insights,
          unlock endless possibilities.
        </h1>
      </div>
    </div>
  );
};

export default BlogBanner;
