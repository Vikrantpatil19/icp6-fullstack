import React , {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Payment = () =>{
  const [formData , setFormData] = useState ({
    fullName: '',
    contactNumber: '',
    email: '',
    billingAddress: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    departureDate: '',
    returnDate: '',
    departureLocation: '',
    arrivalLocation: '',
    numberOfAdults: 1,
    numberOfChildren: 0,
    numberOfInfants: 0,
    seatPreference: 'No Preference',
    mealPreference: 'No Preference',
    frequentFlyerNumber: '',
    promoCode: ''
  });

  const handleChange = (e) =>{
    const {name , value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
  };
}

function Payment() {
  return (
    <div>
      <h1 className='text-center'>Payment page</h1>
    </div>
  )
}

export default Payment
