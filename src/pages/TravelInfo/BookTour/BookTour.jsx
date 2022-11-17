import React from 'react';
import './style.css';


const BookTour = ({onClick}) => {
  return (
    <div className='book-container'>
    <form className='book-form' >
        <h1 className='form-h1'>Enquire Infor</h1>
        <div className='main-book-form'>
        <div className='label-list'>
        <label>Name :</label>
        <label>Phone :</label>
        <label>Person number :</label>
        <label>Date :</label>
        </div>
        <div className='list-input'>
        <input className='ipform ipname'></input>        
        <input className='ipform ipphone'></input>        
        <input type='number' className='ipform ipnumber'></input>        
        <select name="date" id="date">
        <option value="d1">10/10/2022 - 12/12/2022</option>
        <option value="d2">11/11/2022 - 12/12/2022</option>
        </select><br/>
        </div>
        </div>
    </form>
    <div className='book-custom'>
        <h1 className='form-h1'>Do you note for us ?</h1>
        <div className='book-custom-main'>
        <label>Note :</label>
        <textarea className='textarea-book'></textarea>
        </div>
    </div>
    </div>
  )
}

export default BookTour