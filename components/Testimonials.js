import React from 'react';
import test from './Testimonials.module.css';

function Testimonials({ p, img, name, company }) {
  return (
    <div className={test.test}>
      <p>{p}</p>
      <div className={test.level}>
        <img src={img} alt="profile" />
        <h2>{name}</h2>
      </div>
      <div className={test.name}>
        <h4>{company}</h4>
      </div>
    </div>
  );
}

export default Testimonials;
