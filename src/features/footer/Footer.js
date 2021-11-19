import React from 'react';
import css from './Footer.module.css';
export default function Footer() {
  const year = new Date().getFullYear();
  return <div className={css.footer}>© {year}</div>;
}
