import React from 'react';
import main from './Main.module.css';

export default function Main({ children }) {
  return <main className={main.main}>{children}</main>;
}
