import React from 'react';
import BookingForm from './BookingForm';
import ContactForm from './ContactForm';
function General(){
    return(
        <>
        <BookingForm/>
        <ContactForm className='mb-20'/>
        </>
    )
}
export default General;