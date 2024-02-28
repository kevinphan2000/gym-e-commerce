import Footer from "@/components/footer/Footer";
import HeaderSection from "@/components/headerSection/HeaderSection";
import Navbar from "@/components/navbar/Navbar";
import TeamWrapper from "@/components/teamWrapper/teamWrapper";
import ExploreBox from "@/components/exploreBox/exploreBox";
import ShopEquipmentCards from "@/components/shopequipCards/Cards";
import CardSide from "@/components/cardSide/CardSide";
import Popular from "@/components/Popular/Popular";
import Header from "@/components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home({ newProducts }) {
  return (
    <div>
      <Header />
      <Navbar />
      <HeaderSection />
      <ExploreBox />
      <ShopEquipmentCards />
      <CardSide />
      <TeamWrapper />
      <Popular />
      <Footer />
    </div>
  );
}
