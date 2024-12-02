import Image from "next/image";
import NavBar from "./navbar"; 
import "./styles.css"; 
import Footer from "./footer"
 

 
export default function Home() {
  return (
    <>
     <NavBar />
     <h1>Welcome to our shop!</h1>
     <p>Your one-stop shop for all the best products.</p>
     <p>Explore our collection of amazing items and find what you need.</p>
     <section>
      <h1>About us</h1>
      <p></p>
      <button>Learn more</button>
     </section>

     <section>
      <h1>Featured products</h1>
      <button>Shop now</button>
     </section>
     
     <section>
      <h1>Contact us</h1>
     </section>
     <Footer />
    </>
  );
}
