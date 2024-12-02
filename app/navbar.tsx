"use client";
import { useState } from 'react'
import "./styles.css";

function NavBar() {
    
    const [ifLoggedIn, setIfLoggedIn] = useState(false);

    
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li> <a href = "./page.tsx">Home</a></li>
                    <li> <a href = "./about.tsx">About</a></li>
                    <li> <a href = "./shop.tsx">Shop</a></li>
                    {ifLoggedIn ? (  
                    <li><button onClick={() => setIfLoggedIn(true)}>Log out</button></li>)

                    : (<li><button onClick={() => setIfLoggedIn(false)}>Log in</button></li>)
                    }  
                </ul>
            </nav>
        </header>
        </>
    )
}

export default NavBar;