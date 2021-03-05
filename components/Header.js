import React from 'react';
import header from './Header.module.css';

export default function Header({ open, setOpen }) {
  return (
    <header className={header.header}>
      <div className={header.header__left}>
        <img
          src="http://theonceadev.tech/wp-content/uploads/2020/09/final-logo-black-trans.png"
          alt="icon"
        />
      </div>
      <div className={header.header__right} onClick={() => setOpen(true)}>
        <small> &#926;</small>
      </div>
    </header>
  );
}
