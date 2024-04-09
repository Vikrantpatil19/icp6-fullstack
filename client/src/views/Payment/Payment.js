import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentPage = () => {
  const [paymentMethod , setPaymentMethod] = useState('card');
  const [cardDetails , setCardDetails] = useState({
    cardNumber: ' ',
    expiryDate: ' ',
    cvv: ' ',
    cardholderName:' '
  });

  const [upiDetails , setUpiDetails] = useState({
    upiId: ''
  });
}

