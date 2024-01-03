import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import data from "../../data";
import Footer from "../Footer/Footer";

const Testimonial = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div>
    <div className='bg-gradient-to-r from-customBlue to-sky text-white p-6 text-center font-signature text-3xl mb-4'>
  Testimonials
</div>


    <div className='mt-4 text-center text-customBlue font-poppins lg:font-sans text-lg lg:text-xl'>

  At Spotless Guru Cleaners, our stellar ratings and reviews are earned through consistent
  delivery on promises. If we miss the mark, we make it right, always. Our skilled cleaning
  technicians bring shine and care, complemented by a friendly, customer-focused office staff.
  <br />Your satisfaction is our priority!

<div className="mt-6 lg:mt-10">
  <hr className="border-t-2 w-1/2 mx-auto border-gray-300"></hr>
</div>
</div>

    <section className="section">
      <div className="title">
        <h2 className="text-customBlue txt-4x1">What Our Clients Say</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img mx-auto my-auto "/>
              <h4 className="mt-6">{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
      <div className="flex items-center justify-center h-full text-customBlue font-signature text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
  Transforming Spaces, Delighting Lives!
</div>

    

    </section>
    <Footer />
    </div>
  );
};

export default Testimonial;