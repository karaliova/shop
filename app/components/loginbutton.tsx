"use client";
import Link from "next/link";
import "@/globals.css";

const LoginButton = () => {
  return (
    <div className="login">
      <Link href="../signup">
        <button>Log In</button>
      </Link>
    </div>
  );
};

export default LoginButton;
