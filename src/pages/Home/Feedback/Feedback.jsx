import React from 'react';
import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './Feedback.css'

function Feedback() {

    const [feed, setFeed] = useState(1);

    const handlerFeedNext = () => {
        if(feed === 3) {
            setFeed(1)
        } else {
            setFeed(feed + 1)
        }
    }

    const handlerFeedPrev = () => {
        if(feed === 1) {
            setFeed(3)
        } else {
            setFeed(feed - 1)
        }
    }

    return ( 
        <div className="feedback">
            <h2 className='feedback-title'>Client Feedback</h2>
            <div className='feedback-cont'>
                { feed === 1 && <div className="outstanding-feedback">
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://www.exoticasiaholidays.com.au/feedbackphotos/1236_Shirley-resized.jpg" alt="" />
                        <div className="feedback-content">
                            <div className="cus-name">Shirley Chan</div>
                            <div className="cus-content">"Sri Lanka is truly a beautiful country with impressive coastlines and mountain views. The people are warm and welcoming. Ash has gone above and beyond to ensure we have a great experience."</div>
                        </div>
                    </div>
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://www.exoticasiaholidays.com.au/feedbackphotos/1272_IMG_2053-resized.JPG" alt="" />
                        <div className="feedback-content">
                            <div className="cus-name">Janet & Steve</div>
                            <p className="cus-content">"Our trip to Southern India was wonderful. House boat ride in Allepey was probably our highlight. Also enjoyed exploring Pondicherry. Our diver Sri was a delight."</p>
                        </div>
                    </div>
                </div>}
                { feed === 2 && <div className="outstanding-feedback">
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://www.exoticasiaholidays.com.au/feedbackphotos/1237_Sri_Lanka-resized.jpg" alt="" />
                        <div className="feedback-content">
                            <div className="cus-name">Bevan Williams</div>
                            <p className="cus-content">"Service was exceptional & kept us well informed. Absolutely superb. Best holiday ever. An exceptional tour agency."</p>
                        </div>
                    </div>
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://www.exoticasiaholidays.com.au/feedbackphotos/1224_IMG_3184-resized.JPG" alt="" />
                        <div className="feedback-content">
                            <div className="cus-name">Maree Veal</div>
                            <p className="cus-content">"I would highly recommend this company. Ash was always available and very helpful with any enquiries we had prior to our trip. The trip went according to plan, everything was as we expected."</p>
                        </div>
                    </div>
                </div>}
                { feed === 3 && <div className="outstanding-feedback">
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://www.exoticasiaholidays.com.au/feedbackphotos/1273_wendy-resized.jpg" alt="" />
                        <div className="feedback-content">
                            <div className="cus-name">Wendy Williamson</div>
                            <p className="cus-content">"Our first trip to Vietnam and we covered north and Laos. Thanks for being so patience as we had to postpone our trip a couple of times. We will continue to recommend you guys. Thanks for a wonderful time."</p>
                        </div>
                    </div>
                    <div className="feedback-cus">
                        <img className='cus-img' src="https://www.exoticasiaholidays.com.au/feedbackphotos/1215_2A15DC00-3169-4C47-83D8-93091E6F1199-resized.jpeg" alt="" />
                        <div className="feedback-content">
                            <div className="cus-name">Tracey & Ross Forrest</div>
                            <p className="cus-content">"Our holiday in Sri Lanka was better than we could ever have imagined. With Anthony as our driver we were looked after so well. There is nothing that we can complain about. It was a fantastic experience. Exotic Holidays made organising our trip to Sri Lanka easy."</p>
                        </div>
                    </div>
                </div>}
            </div>
            <div className='arrow'>
                <button className="left-arrow" onClick={handlerFeedPrev}>
                    <BsArrowLeft/>
                </button>
                <button className="right-arrow" onClick={handlerFeedNext}>
                    <BsArrowRight/>
                </button>
            </div>
        </div>
    );
}

export default Feedback;