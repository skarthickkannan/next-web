import React, { useState } from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import NavModal from '../components/NavModal';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <Main children={children} />
      {open ? <NavModal setOpen={setOpen} /> : ''}
    </div>
  );
}
