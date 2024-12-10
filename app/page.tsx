import Image from "next/image";
import "@/globals.css";

const DATA = [{ title: "" }];
export default function Home() {
  return (
    <>
      <section className="welcome">
        <h1>Welcome to our shop!</h1>
        <p>Your one-stop shop for all the best products.</p>
        <p>
          Explore our collection of amazing items and find what you need. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </section>
      <section className="aboutUsHome">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="buttonNormal">Learn more</button>
      </section>

      <section className="featured">
        <h2>Featured products</h2>
        <button className="buttonNormal">Shop now</button>
      </section>

      <section className="contactUs">
        <h2>Contact us</h2>
      </section>
    </>
  );
}
