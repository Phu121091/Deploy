import React, { useEffect ,useState ,useContext } from "react";
import { NavLink,Link, useNavigate, useLocation } from "react-router-dom";
import {BsSuitHeart,BsPerson} from 'react-icons/bs';
import {GrUserAdmin} from 'react-icons/gr';
import './header.css';
import { UserContext } from '../Layout';
import {IoIosArrowDown ,IoIosArrowForward} from 'react-icons/io';
import {FaSearchLocation,FaPhoneAlt} from 'react-icons/fa';
import {BiPaperPlane} from 'react-icons/bi';
import {BsList} from 'react-icons/bs';
import Search from "../Find/Search";
import Buttontop from "../ButtonTop/Buttontop";
import Stylist from "../../data/stylelist.json";
import Logo from './logo-alt.png';
import MobileMenu from "./MobileMenu";




const Header = () => {

  const [showfind,setshowfind]=useState('hidden');
  const [showlog,setshowlog] =useState('hidden');

  const user = useContext(UserContext);
  console.log(user);
  console.log(Stylist);

  const navigate = useNavigate();
  const location = useLocation();


  const handleLogout = () => {
    user.change(null);
    navigate("/log-in", { replace: true });
  };
//design link active
  const handleActive = ({ isActive }) => {
    return isActive && "active";
  };

// Show-hide Log and Search
  const ShowFind = () => {
    if (showfind==='show'){
      setshowfind('hidden')
    } else setshowfind('show')
  }
  const Showlog = () => {
    showlog==='show'?setshowlog('hidden'):setshowlog('show')
  }
// Show menu mobile
  const [showmobile,setshowmobile] =useState('-100%')
  const Showlist = () => { (showmobile=='-100%')?setshowmobile('0%'):setshowmobile('-100%') }
  

  return (
    <div className="header">

      <div className="header-bot">
        <Link to='/' className="link-home"><img src={Logo}/></Link>
      <div className="menu">
        <div className="menu-li" id='list1'>
      <NavLink to="/" id={handleActive} className='link-f'>
        Destinations
      </NavLink>
      <IoIosArrowDown/>
      <div className="list-hidden list-1">
        <div className="list-country">
        <Link to="/Destination/Vietnam">Viet Nam</Link>
        <div className="list-mini">
        <Link>Ha Noi</Link>
        <Link>SaPa - Lao Cai</Link>
        <Link>Ha Long</Link>
        <Link>Tay Nguyen</Link>
        <Link>Da Nang</Link>
        <Link>Sai Gon</Link>
        <Link>Hai Phong</Link>
        <Link>Binh Lieu</Link>
        <Link>Hue</Link>
        <Link>Vung Tau</Link>
        </div>
        </div>

        <div className="list-country">
        <Link to="/Destination/Lao">Lao</Link>
        <div className="list-mini">
        <Link>Luang Prabang</Link>
        <Link>Viang Chan</Link>
        </div>
        </div>

        <div className="list-country">
        <Link to="/Destination/Thailan">Thai Lan</Link>
        <div className="list-mini">
        <Link>Bangkok</Link>
        <Link>Koh Panyee</Link>
        <Link>Pattaya</Link>
        </div>
        </div>

        <div className="list-country">
        <Link to="/Destination/Campuchia">Campuchia</Link>
        <div className="list-mini">
        <Link>Angkor Wat, Angkor Thom</Link>
        <Link>Phnom Penh</Link>
        <Link>Battambang</Link>
        </div>
        </div>

      </div>
      </div>
      <div className="menu-li">
      <NavLink to="/TravelStyles" id={handleActive} className='link-f'>
        Travel Styles
      </NavLink>
      <IoIosArrowDown/>
      <div className="list-hidden list-2">
        <Link to='/Classic'>CLASSIC</Link>
        <Link to='/Family'>FAMILY</Link>
        <Link to='/Beach'>BEACH</Link>
        <Link to='Short trip'>SHORT TRIPS</Link>
        <Link to='Culinary'>CULINARY</Link>
        <Link to='Adventure'>ADVENTURE</Link>
        <Link to='Cruise'>CRUISES</Link>
      </div>
      </div>

      <div className="menu-li">
      <NavLink to="/SpecialDeals" id={handleActive} className='link-f'>
        Special Deals
      </NavLink>
      <IoIosArrowDown/>
      <div className="list-hidden list-3">
        <Link to='/Golf'>GOLF</Link>
        <Link to='/Welles'>WELLES</Link>
        <Link to='/Mice'>M.I.C.E</Link>
        <Link to='/Luxury'>LUXURY</Link>
        <Link to='/Heritage'>HERITAGES</Link>
        <Link to='/Reponsible'>REPONSIBLE TRAVEL</Link>
      </div>
      </div>
      <div className="menu-li">
      <NavLink to="/TripFinder" id={handleActive} className='link-f'>
        Trip Finder
      </NavLink>
      </div>
      <div className="menu-li">
      <NavLink to="/News" id={handleActive} className='link-f'>
        Company
      </NavLink>
      <IoIosArrowDown/>
      <div className="list-hidden list-4">
        <Link to='/AboutUs'>ABOUT US</Link>
        <Link to='/Policy'>POLICY</Link>
        <Link to='/Privacy'>PRIVACY</Link>
        <Link to='/Payment'>PAYMENT GATEWAY</Link>
        <Link to='/Affiliates'>AFFILIATES</Link>
      </div>
      </div>
      <div className="menu-li">
      <NavLink to="/TravelStyles" id={handleActive} className='link-f'>
        Media
      </NavLink>
      <IoIosArrowDown/>
      <div className="list-hidden list-2">
        <Link to='/Blog'>BLOG</Link>
        <Link to='/Feedback'>FEEDBACK</Link>
      </div>
      </div>
    </div>
      
      <div className="phone-find-container">
        <div className="find-container" onClick={()=>ShowFind()}>
        <FaSearchLocation className="header-icon"/>
        <button type='text' className="find-btn">Search</button>
        </div>
        <div className="phone-container">
          <FaPhoneAlt className="header-icon"/>
          <span className="phone-number">03.548.65073</span>
        </div>

      </div>
      {/* <Link to='/ShopInfor' className="tour-shoped-icon">
      <BiPaperPlane/><span>{user.shoped.length}</span>
      </Link> */}
      
      { user.username ?
      (
        <div className="log">
          
          <BsSuitHeart/>
          {user.username.admin?<GrUserAdmin/>:<BsPerson/>}
          <Link to='/User' className="sign">{user.username.userName}</Link>
          <button className="logout" onClick={handleLogout}>Đăng xuất</button>
          <Link to="/Dangtin" className="post" >Đăng tin</Link>
        </div>

      ) :
      (
        <div className="log" onClick={()=>Showlog()}>
        <p>For User</p>
        <IoIosArrowForward/>
        </div>
        
      )
      }     
      <BsList className="icon-list-mobile" onClick={()=>Showlist()}/>
      <Buttontop/>
      </div>

      <Search id={showfind}/>
      <div className="log-container" id={showlog}>

        <Link to='/LogIn' className="log-link">Log in</Link>
        <Link to='/SignUp' className="log-link">Register</Link>
      </div>

      <MobileMenu showmobile={showmobile}/>
    
    </div>
  )
}

export default Header