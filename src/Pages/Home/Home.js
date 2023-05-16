import CarouselCards from "../../Components/CarouselCards";
import BodyContainer from "../../Components/BodyContainer";
import "../Navbar/Navbar.css";
import WhyDrs from "../../Components/WhyDrs";
export default function Home() {
  return (
    <div>
      <div id="bodycontainer">
        <CarouselCards />
        <BodyContainer />
        <WhyDrs /> 
      </div>
    </div>
  );
}
