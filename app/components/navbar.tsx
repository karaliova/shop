"use client";
import { useState } from "react";
import Link from "next/link";
import LoginButton from "@/components/loginbutton";
import "@/globals.css";

function NavBar() {
  const [ifLoggedIn, setIfLoggedIn] = useState(false);

  return (
    <header className="bg-gray">
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/shop">SHOP</Link>
          </li>
        </ul>
      </nav>
      <LoginButton />
    </header>
  );
}

export default NavBar;
