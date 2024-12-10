import Image from "next/image";
import "@/about/styles.css";

export default function About() {
  return (
    <>
      <div className="aboutUs">
        <h1>About us</h1>
        <p>
          Welcome to our company! We are dedicated to providing the best
          products and services to our customers. Our mission is to improve your
          quality of life.
        </p>
      </div>
      <div className="ourStory">
        <h2>Our Story</h2>
        <p></p>
      </div>
      <div className="ourTeam">
        <p>
          Meet our dedicated team of professionals who work hard to bring you
          the best experience:
        </p>
        <ul>
          <li>
            <strong>John Doe</strong> - CEO
          </li>
          <li>
            <strong>Jane Smith</strong> - CTO
          </li>
          <li>
            <strong>Emily Johnson</strong> - Marketing Manager
          </li>
        </ul>
      </div>
    </>
  );
}
