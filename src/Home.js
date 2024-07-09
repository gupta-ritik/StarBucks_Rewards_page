import LowerHeader from "./components/Header/LowerHeader";
import ExtrasContainer from "./containers/ExtrasSection/ExtrasContainer";
import Header from "./containers/Header";
import MainDesktop from "./containers/JoinContainer/MainDesktop";
import StartedSection from "./containers/StartedContainer/StartedSection";
import CashContainer from "./containers/CashContainer/CashContainer";
import QuestionContainer from "./containers/QuestionsContainer/QuestionContainer";
import StarTermsContainer from "./containers/StarTermsContainer/StarTermsContainer";
import Footer from "./containers/Footer";
import StarCodesContainer from "../src/containers/StarCodesContainer/StarCodesContainer";
import MainMobile from "./containers/JoinContainer/MainMobile";
import FavoritesContainer from "./containers/FavoritesContainer/FavoritesContainer";
import "./App.css";
// import Carousel from "./components/Carousel/Carousel";

function Home() {
  return (
    <div className="App">
      <LowerHeader />
      <section className="present">
        <div className="mb-[72px] md:mb-[128px]">
          <MainDesktop />
          <MainMobile />
        </div>
        <StartedSection />
        <FavoritesContainer />
        <ExtrasContainer />
        <CashContainer />
        <StarCodesContainer />
        <QuestionContainer />
        <StarTermsContainer />
        <Footer />
      </section>
    </div>
  );
}

export default Home;
