import React from 'react';
import IMG from '../../data/images/maldives3.jpg';
import './style.css';
import { useState,useContext } from 'react';
import Data from '../../data/tourlist.json';
import TourItemlist from '../../components/TourItemlist/TourItemlist';
import { UserContext } from '../../components/Layout';
import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs';

const UserInfor = () => {
// An hien form edit    
    const [formS,setformS]=useState('invi');
    const ShowEdit = () => {
        {formS=='invi'?setformS('showw'):setformS('invi');}
    }


    const User = useContext(UserContext);
// chon list favorite- tour book
    const [pick,setpick] = useState(['picked','notpick']);
    const [listrender,setlist] = useState(Data[0]);
    const pickBook = () => {
        setpick(['picked','noptpick']);
        setlist(Data[0]);        
    }
    const pickFavorite = () => {
        setpick(['notpick','picked']);
        setlist(Data[1]);
    }
    console.log(User);
// ham edit user
    const [ename,setename] = useState();
    const [eage,setage] = useState();
    const [egender,setegender] = useState();
    const [eadd,seteadd] = useState();
    const [eintro,seteintro] = useState();
    const Editsubmit = (e) => {
        e.preventDefault();
        User.change({
            ...User.username,name:`${ename}`,
            address:`${eadd}`,
            age:`${eage}`,
            introduce:`${eintro}`
        })
    }
    



  return (
    <div>

        <div className='bannner'>
            <img className='banner-img' src={IMG}></img>
        </div>

        <div className='user-main'>
            <img className='user-img' src='https://th.bing.com/th/id/OIP.AhqFr4hWa494IIrnJZ2UkgAAAA?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
            
            <div className='user-infor-container'>

            <div className='user-about'>
            <h1>{User.username.name?User.username.name:'No name'}</h1>
                <p>{User.username.introduce?User.username.introduce:'Please talk to you'}</p>
                <div className='contact'>
             <BsFacebook className='contact-option'/>
             <BsTwitter className='contact-option'/>
             <BsGoogle className='contact-option'/>
      </div>
            </div>
            <div className='user-infor'>
                <h1>Detail</h1>
                <p>Name : {User.username.name?User.username.name:'No name'}</p>
                <p>Gender : {User.username.gender?User.username.gender:'unknow'}</p>
                <p>Age : {User.username.age?User.username.age:'unknow'}</p>
                <p>Address : {User.username.address?User.username.address:'unknow'}</p>
                <div className='link-contact-user'>

                </div>
                <button className='edit-user' onClick={()=>ShowEdit()}>Edit</button>
            </div>

            </div>
            <div className='type-tour-user'>
                <p className={pick[0]} onClick={()=>pickBook()}>Tour booking</p>
                <p className={pick[1]} onClick={()=>pickFavorite()}>Favorite</p>
            </div>
            <div className='list-tour-user'>
            <TourItemlist data={listrender} status='rev'/>
            </div>
        
        </div>
        <div className='form-hidden' id={formS} >
        <form className='form-edit' onSubmit={(e)=>Editsubmit(e)}>
            <h1 className='form-edit-h1'>Edit Information</h1>
            <label for='edit-name'>Name :<input className='edit-name' placeholder='Your Name' name='edit-name' onChange={(event) => setename(event.target.value)}></input></label><br/>
            <label for='edit-birth'>Age :<input className='edit-birth' placeholder='Year of birth' name='edit-birth' onChange={(event) => setage(event.target.value)}></input></label><br/>
            <label for='edit-address'>Address :<input className='edit-address' placeholder='address' name='edit-address' onChange={(event) => seteadd(event.target.value)}></input></label><br/>
            <label for='edit-gender'>Gender :
            <input type='radio' onClick={(e)=>console.log(e)} name='radio-male'/><label for='radio-male'>Male</label>
            <input type='radio' name='radio-female'/><label for='radio-female'>Female</label></label>
            <label for='edit-intro'>Introduce :<textarea className='edit-intro' placeholder='introduce' name='edit-intro' onChange={(event) => seteintro(event.target.value)}></textarea></label><br/>
            {/* <label for="myfile">:</label>
            <input type="file" id="myfile" name="myfile"/> */}
            <div className='btnform-list'>
            <button type='submit' className='edit-user'>Submit</button>
            <button onClick={()=>ShowEdit()} className='edit-user'>Close</button>
            </div>
        </form>
        </div>
    </div> 
  )
}


export default UserInfor