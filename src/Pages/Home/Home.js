import CarouselCards from "../../Components/CarouselCards";
import BodyContainer from "../../Components/BodyContainer";
import "../Navbar/Navbar.css";
export default function Home() {
  return (
    <>
      <div id="bodycontainer">
        <CarouselCards />
        <BodyContainer />
      </div>
    </>
  );
}
