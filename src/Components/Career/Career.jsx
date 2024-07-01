import Apply from "./Apply";
import CareerAWards from "./CareerAWards";
import CareerBanner from "./CareerBanner";
import CareerOpportunity from "./CareerOpportunity";
import GrowProfessional from "./GrowProfessional";

const Career = () => {
  return (
    <div>
      <CareerBanner></CareerBanner>
      <GrowProfessional></GrowProfessional>
      <CareerOpportunity></CareerOpportunity>
      <CareerAWards></CareerAWards>
      <Apply></Apply>
    </div>
  );
};

export default Career;
