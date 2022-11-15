import './Payment.css';
import {FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcPaypal} from 'react-icons/fa';

function Payment() {
    return ( 
        <div className="payment-wrapper">
            <div className="payment">
                <form action="" method="post" className="form" id="form-1">
                    <h3 className="heading">PAYPAL PRO PAYMENT FORM</h3>
                    <p className="desc">
                        Would you like to enshrine one of our tours? 
                    </p>

                    <div className="spacer"></div>

                    <div className="form-group">
                        <label className="form-label">My tour</label>
                        <div className="my-tour">
                            <ul>
                                <li>Ha Noi</li>
                                <li>HaLong Bay</li>
                            </ul>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="method" className="form-label">Payment method</label>
                        <div className="form-method">
                            <div className="method">
                                <label className="method-p" for="">
                                </label>
                                <input name="method" type="radio" value="visa" className="form-control" />
                                <FaCcVisa className='method-option'/>
                                <FaCcMastercard className='method-option'/>
                                <FaCcDiscover className='method-option'/>
                            </div>
                            <div className="method">
                                <label className="method-p" for="">
                                </label>
                                <input name="method" type="radio" value="paypal" className="form-control" />
                                <FaCcPaypal className='method-option'/>
                            </div>
                        </div>
                        <span className="form-message"></span>
                    </div>

                    <div className="form-group">
                        <label for="password" className="form-label">Shipping address</label>
                        <input type="text" name='street' className='form-control' />
                        <input type="text" name='city' className='form-control' />
                        <input type="text" name='street' className='form-control' />
                        <input type="text" name='postal/zip code' className='form-control' />
                        <span className="form-message"></span>
                    </div>

                    <button className="form-submit">Submit</button>

                </form>
            </div>
        </div>
    );
}

export default Payment;