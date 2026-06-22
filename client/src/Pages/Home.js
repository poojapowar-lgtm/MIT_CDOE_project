import React from "react";
import Header from "../Components/header/Header";
import Banner from "../Components/banner/Banner";
import AboutMIT from "../PageContent/HomeComponent/AboutMIT";
import UniversityProfile from "../PageContent/HomeComponent/UniversityProfile";
import Accreditation from "../PageContent/HomeComponent/Accreditation";



const Home = () => {
  return (
    <div className="home">
      <Banner />
      <AboutMIT/>
      <UniversityProfile/>
      <Accreditation/>
    </div>
  );
};

export default Home;
