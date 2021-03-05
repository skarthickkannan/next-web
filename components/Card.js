import React from 'react';
import card from './Card.module.css';

export default function Card({ img, h1, p }) {
  return (
    <div className={card.card}>
      <img src={img} alt={img} />
      <h1>{h1}</h1>
      <p>{p}</p>
    </div>
  );
}
