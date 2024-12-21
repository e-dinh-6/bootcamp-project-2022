import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    <header className={style.navbar}>
      <h1 className={style.logo}>
        <a href="/">Emi Dinh</a>
      </h1>
      <nav className={style.navbar}>
        <ul className={style.navlist}>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="portfolio.html">Portfolio</a>
          </li>
          <li>
            <a href="resume.html">Resume</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
