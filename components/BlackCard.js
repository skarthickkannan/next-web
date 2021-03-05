import React from 'react';
import black from './BlackCard.module.css';

export default function BlackCard({ img, h2, p }) {
  return (
    <div className={black.black}>
      <img src={img} alt="img" />
      <h2>{h2}</h2>
      <p>{p}</p>
    </div>
  );
}
