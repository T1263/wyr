import React from 'react';
import css from './Footer.module.css';
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={css.footer}>
      © {year}
      <br />
      <a href="https://www.freepik.com/">Pics by Freepik.com</a>
    </div>
  );
}
