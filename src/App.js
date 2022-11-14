import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import './App.css';
import Home from "./pages/Home/home";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import Welles from './pages/SpecialDeals/Welles/Welles';
// import Luxury from './pages/SpecialDeals/Luxury/Luxury';
// import MICE from './pages/SpecialDeals/MICE/MICE';
// import Heritages from './pages/SpecialDeals/Heritages/Heritages';
// import ReponsibleTravel from './pages/SpecialDeals/ReponsibleTravel/ReponsibleTravel';
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import ShopInfor from "./pages/ShopInfor/ShopInfor";
import TravelInfo from "./pages/TravelInfo/TravelInfo";
import TripFinder from "./pages/TripFinder";
import Vietnam from "./pages/Vietnam/Vietnam";
import Lao from "./pages/Laos/Lao";
import Campuchia from "./pages/Campuchia/Campuchia";
import Thailan from "./pages/Thailan/Thailan";
import Blog from "./pages/Blog/Blog";
import CustomerFeedback from "./pages/CustomerFeedback/CustomerFeedback";
import Tourlist from "./pages/Tourlist/Tourlist";
import Destination from "./pages/Destination/Destination";
import Feedback from "./pages/Home/Feedback/Feedback";

 
function App() {

  return (
    <div className="App" >
      <BrowserRouter>
      <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Welles" element={<Welles/>}/> */}
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ShopInfor" element={<ShopInfor />} />
      <Route path="/TravelInfo" element={<TravelInfo />} />
      <Route path="/Feedback" element={<Feedback />} />
      <Route path='/TripFinder' element={<TripFinder/>}/>
      <Route path='/Destination/Vietnam' element={<Vietnam/>}/>
      <Route path='/Destination/Lao' element={<Lao/>}/>
      <Route path='/Destination/Thailan' element={<Thailan/>}/>
      <Route path='/Destination/Campuchia' element={<Campuchia/>}/>
      <Route path="/CustomerFeedback" element={<CustomerFeedback />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path=':id' element={<Tourlist/>}/>
      </Routes>
      </Layout> 
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
