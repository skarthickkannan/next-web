import React from 'react';
import simple from './SimpleCard.module.css';

export default function SimpleCard({ h2, p, but }) {
  return (
    <div className={simple.simple}>
      <h2>{h2}</h2>
      <p>{p}</p>
      <button>{but}</button>
    </div>
  );
}
