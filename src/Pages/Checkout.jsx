import React from 'react'
import AddressForm from '../Components/AddressForm'
import DeliveryOption from '../Components/DeliveryOption'
import OrderSummary from '../Components/OrderSummary'
import Payment from '../Components/Payment'
import "../Styles/Checkout.css"

const Checkout = () => {
    return (
        <div className='Checkout'>
            <div className='fake'>
            </div>
            <div className='Allbody'>
                <div className='leftside'>
                    <div className='AddressBox'>
                        <AddressForm />
                    </div>
                    <div className="delivery" >
                        <DeliveryOption />
                    </div>
                    <div className="payment" >
                        <Payment />
                    </div>
                </div>
                <div>
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default Checkout