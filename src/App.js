import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layouts from "./components/Layout";
import HeadFoot from "./components/HeadFoot";
import "./App.css";
import Home from "./pages/Home/home";
import Contacts from "./pages/Contacts";
import HouseLease from "./pages/HouseLease";
import HouseSell from "./pages/HouseSell";
import News from "./pages/News";
import Project from "./pages/Project";
import InforItem from "./pages/InforItem";
import Signin from "./pages/Account/Signin";
import Login from "./pages/Account/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import New from "./pages/News/new";
import Newitem from "./pages/News/news";
import User from "./pages/User";
import CreatePost from "./pages/Post";
import Sellfind from "./pages/Find/Sellfind";
import Rentfind from "./pages/Find/Rentfind";
import LogIn from "./pages/LogIn/LogIn";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        {show && (
          <nav>
            <HeadFoot>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Nhadatban" element={<HouseSell />} />
                <Route path="/Nhadatchothue" element={<HouseLease />} />
                <Route path="/Duan" element={<Project />} />
                <Route path="/Tintuc" element={<News />} />
                <Route path="/Danhba" element={<Contacts />} />
                <Route path="/Create_New_Post" element={<CreatePost />} />
                <Route path=":id" element={<InforItem />} />
                <Route path="/Tin" element={<Newitem />}>
                  <Route path=":id" element={<New />} />
                </Route>
                <Route path="/Timkiemban" element={<Sellfind />} />
                <Route path="/Timkiemthue" element={<Rentfind />} />
                <Route path="/User" element={<User />} />
                <Route path="/Dangki" element={<Signin />} />
                <Route path="/Dangnhap" element={<Login />} />
                <Route path="/Dangtin" element={<CreatePost />} />
                <Route path="/LogIn" element={<LogIn />} funcNav={setShow} />
                props.funcNav(false);
              </Routes>
            </HeadFoot>
          </nav>
        )}
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
