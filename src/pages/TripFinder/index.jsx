import React from 'react';
import { useState } from 'react';
import './style.css';
import {ImRadioUnchecked, ImSearch} from 'react-icons/im';
import {IoIosArrowDown, IoIosArrowDropdown} from 'react-icons/io'
import { BiReset } from 'react-icons/bi';

const TripFinder = () => {

    const [showli1,setshowli1]=useState('hidden');
    const [showli2,setshowli2]=useState('hidden');
    const [showli3,setshowli3]=useState('hidden');
    const [showli4,setshowli4]=useState('hidden');
    const [showli5,setshowli5]=useState('hidden');

    const Showli = (a) =>{
        switch(a) {
            case 1:
                (showli1==='showli')?setshowli1('hiddenli'):setshowli1('showli')
              break;
            case 2:
                (showli2==='showli')?setshowli2('hiddenli'):setshowli2('showli')
              break;
            case 3:
                (showli3==='showli')?setshowli3('hiddenli'):setshowli3('showli')
                break;
            case 4:
                (showli4==='showli')?setshowli4('hiddenli'):setshowli4('showli')    
            break;
                case 5:
                (showli5==='showli')?setshowli5('hiddenli'):setshowli5('showli')
            break;
        }
    }

    const [pick, setPick] = useState('nopick');
    const Pick =()=>{
        (pick === 'pick') ? setPick('nopick') : setPick('pick')
    }

    const [check, setCheck] = useState(false);

    const handleClick = () => {
        setCheck(!check);
    }

  return (
    <div className='trip-finder'>
        <div className='div-img-head'>
            <div className='finder-text'>
            <h1 className='finder-h1'>TRIPFINDER</h1>
            <p className='finder-p'>SELECT YOUR PERFECT EXERIENCE</p>
            </div>
        </div>

        <div className='finder-container'>
            <div className='finder-select'>
                <div className='finder-key'>
                    <ImSearch className='finder-icon'/>
                    <input className='finder-value' placeholder='Find your perfect trip'/>
                </div>
                <div className='finder-title'>
                    <p>FILTER VIEW:</p>
                    <button><BiReset className='finder-reset'/></button>
                </div>
                <div className='find-des fc '>
                    <div className='show-more'>
                        <p>DESTINATION</p>
                        <IoIosArrowDown className= "more" onClick={()=>Showli(1) &&  handleClick()}/>
                    </div>
                    <ul className={`find-des-list fl  ${showli1}`}>
                    <li className={pick} onClick={()=>Pick()}>Viet Nam</li>
                    <li className={pick} onClick={()=>Pick()}>Thai Lan</li>
                    <li className={pick} onClick={()=>Pick()}>Lao</li>
                    <li className={pick} onClick={()=>Pick()}>Cambodia</li>    
                    </ul>     
                </div>
                <div className='find-style fc'>
                    <div className='show-more'>
                        <p>TRAVEL STYLE </p>
                        <IoIosArrowDown className='more' onClick={()=>Showli(2)}/>
                    </div>
                    <ul className={`find-style-list fl ${showli2}`}>
                    <li className={pick} onClick={()=>Pick()}>Classic</li>
                    <li className={pick} onClick={()=>Pick()}>Family</li>
                    <li className={pick} onClick={()=>Pick()}>Beach</li>
                    <li className={pick} onClick={()=>Pick()}>Short Trip</li>
                    <li className={pick} onClick={()=>Pick()}>Culinary</li>
                    <li className={pick} onClick={()=>Pick()}>Adventure</li>
                    <li className={pick} onClick={()=>Pick()}>Cruises</li>
                    </ul>
                </div>
                <div className='find-special fc '>
                    <div className='show-more'>
                        <p>SPECIAL DEAL </p>
                        <IoIosArrowDown className='more' onClick={()=>Showli(3)}/>
                    </div>
                    <ul className={`find-special-list fl ${showli3}`}>
                    <li className={pick} onClick={()=>Pick()}>Welles</li>
                    <li className={pick} onClick={()=>Pick()}>Mice</li>
                    <li className={pick} onClick={()=>Pick()}>Luxury</li>
                    <li className={pick} onClick={()=>Pick()}>Heritages</li>
                    <li className={pick} onClick={()=>Pick()}>Reponsible travel</li> 
                    </ul>
                </div>
                <div className='find-length fc'>
                    <div className='show-more'>
                        <p>TOUR LENGTH </p>
                        <IoIosArrowDown className='more' onClick={()=>Showli(4)}/>
                    </div>
                    <ul className={`find-length-list fl ${showli4}`}>
                    <li className={pick} onClick={()=>Pick()}>2 - 5 day</li>  
                    <li className={pick} onClick={()=>Pick()}>6 -10 day</li>
                    <li className={pick} onClick={()=>Pick()}>11 -15 day</li> 
                    <li className={pick} onClick={()=>Pick()}>Over 16 day</li>
                    </ul>
                </div>
                <div className='find-cost fc'>
                    <div className='show-more'>
                        <p>BUDGET </p>
                        <IoIosArrowDown className='more' onClick={()=>Showli(5)}/>
                    </div>
                    <ul className={`find-cost-list fl ${showli5}`}>
                    <li className={pick} onClick={()=>Pick()}>under 300 $</li>
                    <li className={pick} onClick={()=>Pick()}>300 - 900 $</li>
                    <li className={pick} onClick={()=>Pick()}>900 - 1500 $</li>
                    <li className={pick} onClick={()=>Pick()}>1500 $ up</li>
                    </ul>
                </div>

            </div> 
            <div className='finder-result'>
                <img className='finder-img' src="https://vcdn1-dulich.vnecdn.net/2022/05/25/DJI-0529-6875-1615787823-6137-1653453621.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=0YAOIYJli8Hay4POD9My1Q" alt="" />
            </div>
        </div>
    </div>
  )
}

export default TripFinder
