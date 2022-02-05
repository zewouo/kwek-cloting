import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KPd4RAM2t3rcVrfZuYDSq1aNTJyGGuObKsigO1Ck3CQeHaf340sFRZqrlBmbBLaLRILHatDxy0VjH3Ec5WsG0Fr00UYmELFCs'
 const onToken = token => {
     console.log(token);
     alert('Payment Successfull');
} 
return (
    <StripeCheckout 
        label = 'Pay Now'
        name = 'KWEK-CLOTING Ltd.'
        billingAddress
        shippingAddress
        image='https://stripe.com/img/documentation/checkout/marketplace.png'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

    />
);
};
export default StripeCheckoutButton;