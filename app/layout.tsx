import "@/globals.css";
import NavBar from "@/components/navbar";
import Home from "@/page";
import About from "@/about/page";
import Shop from "@/shop/page";
import SignUp from "@/components/signup";
import Login from "@/login/page";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shop</title>
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
