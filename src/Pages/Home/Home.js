import CarouselCards from "../../Components/CarouselCards";
import BodyContainer from "../../Components/BodyContainer";
import "../Navbar/Navbar.css";
import WhyDrs from "../../Components/WhyDrs";
import Footer from "../../Components/Footer";
export default function Home() {
  return (
    <div>
      <div id="bodycontainer">
        <CarouselCards />
        <BodyContainer />
        <WhyDrs />
        <Footer />
      </div>
    </div>
  );
}
