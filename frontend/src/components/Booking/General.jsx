import React from 'react';
import BookingForm from './BookingForm';
import ContactForm from './ContactForm';
function General(){
    return(
        <>
         <h2 className='bg-gradient-to-r from-customBlue to-sky text-white p-6 text-center font-signature text-3xl mb-4'>Book Online</h2>
        <BookingForm/>
        <ContactForm className='mb-20'/>
        </>
    )
}
export default General;