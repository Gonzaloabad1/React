import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import reactBanner from "./assets/React.png";
import Banner from "./components/Banner/Banner";
import Tech from "./components/Tech/Tech";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Banner bannerImage={reactBanner} bannerAlt="ReactJS Banner"/>
      <Tech></Tech>
    </>
  );
};

export default App;