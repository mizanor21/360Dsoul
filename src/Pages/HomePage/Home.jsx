import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Cloud from "../../Components/Cloud/Cloud";
import FeaturedCards from "../../Components/FeaturedCards/FeaturedCards";
// import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedCards></FeaturedCards>
      <Cloud></Cloud>
      <Brands></Brands>
    </div>
  );
};

export default Home;
