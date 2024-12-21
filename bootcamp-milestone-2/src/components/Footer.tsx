import React from "react";
import style from "./footer.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <footer className={style.footer}>
      © 2024 Emi Dinh | Thanks for visiting! Come back soon! 😊
    </footer>
  );
}
