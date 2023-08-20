import './App.css';
import PreNavbar from "./Components/PreNavbar"
import Navbar from "./Components/Navbar"
import Slider from "./Components/Slider";
import Offer from "./Components/Offer";
import Headings from "./Components/Headings";
import StartProduct from "./Components/StartProduct";
import HotAcessoriesManue from "./Components/HotAcessoriesManue";
import HotAccessories from "./Components/HotAccessories";
import ProductReview from "./Components/ProductReview";
import Videos from "./Components/Videos"
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import NavOptios from "./Components/NavOptios";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import data from './Components/data.json';

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>
      <Slider />
      <Offer />
      <Headings text="START PRODUCTS" />
      <StartProduct starProduct={data.starProduct} />
      <Headings text="HOT ACCESSORIES" />
      <HotAcessoriesManue />
      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
      </Routes>
      <Routes>
        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
      </Routes>

      <Routes>
        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
      </Routes>

      <Routes>
        <Route exact path="/lifestyle" element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} />
      </Routes>

      <Routes>
        <Route exact path="/mobilAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      
      <Headings text="PRODUCT REVIEW" />
      <ProductReview productReviews={data.productReviews}/>
      <Headings text="VIDEOS" />
     <Videos videos={data.videos}/>
     <Headings text="IN THE PRESS" />
     <Banner Banner={data.banner}/>
      <Footer footer={data.footer}/>

      

    </Router>

    
  );


}

export default App;

