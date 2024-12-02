import Image from "next/image";
import NavBar from "./navbar"; 
import Footer from "./footer"
import "./styles.css";

export default function about () {
    return (
        <>
        <NavBar />
    <h1>About us</h1>
    <p>
    Welcome to our company! We are dedicated to providing the best products and services to our customers.
    Our mission is to improve your quality of life. 
    </p>
    <h2>Our Story</h2>
    <p>
                     
    </p>
    <p>
    Meet our dedicated team of professionals who work hard to bring you the best experience:
</p>
<ul>
    <li><strong>John Doe</strong> - CEO</li>
    <li><strong>Jane Smith</strong> - CTO</li>
    <li><strong>Emily Johnson</strong> - Marketing Manager</li>
</ul>
    <Footer />
    </>
    );
}