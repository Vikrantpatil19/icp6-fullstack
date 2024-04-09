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

  const [netBankingDetails , setNetBankingDetails] = useState ({
    bankName: '',
    accountNumber: ''
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };

  const handleUpiChange = (e) => {
    const { name, value } = e.target;
    setUpiDetails({
      ...upiDetails,
      [name]: value
    });
  };

  const handleNetBankingChange = (e) => {
    const { name, value } = e.target;
    setNetBankingDetails({
      ...netBankingDetails,
      [name]: value
    });
  };

}

