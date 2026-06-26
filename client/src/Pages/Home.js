import React from "react";
import Header from "../Components/header/Header";
import Banner from "../Components/banner/Banner";
import WhoWe from "../PageContent/HomeComponent/WhoWe";
import CDOEPurpose from "../PageContent/HomeComponent/CDOEPurpose";
import Accreditation from "../PageContent/HomeComponent/Accreditation";
import HomePrograms from "../PageContent/HomeComponent/HomePrograms";
import Department from "../PageContent/HomeComponent/Department";


const Home = () => {
  return (
    <div className="home">
      <Banner />
<WhoWe/>
<CDOEPurpose/>
          <HomePrograms/>
          <Department/>
      <Accreditation/>
  
    </div>
  );
};

export default Home;
