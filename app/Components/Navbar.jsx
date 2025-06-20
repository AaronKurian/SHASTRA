"use client";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { NavItems } from "@/constants";

const Navbar = () => {
  const [mobilenav, setmobilenav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.body.style.overflowY = mobilenav ? "hidden" : "auto";
    }
  }, [mobilenav]);

  const handleAuthClick = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div
      className={`w-screen text-white max-h-[90px] h-full flex flex-row items-center justify-between max-lg:pl-3 lg:justify-center lg:px-[3.5rem] fixed top-0 z-[999] transition-all duration-300 ${
        scrolled ? "bg-[#000512]/[.5] backdrop-blur" : "bg-transparent"
      }`}
    >
      <Link 
          href="/"
          className="text-2xl font-bold gradient-text"
          aria-label="SHASTRA 2025"
        >
          <Image 
          src={logo} 
          width={142.5} 
          height={75} 
          alt="SHASTRA MEC Logo"
          priority 
        />
        </Link>
        

      <button
        onClick={() => setmobilenav(!mobilenav)}
        className="text-4xl block lg:hidden mr-3"
      >
        {!mobilenav ? (
          <RxHamburgerMenu className="text-[40px]" />
        ) : (
          <IoCloseOutline className="text-[40px]" />
        )}
      </button>

      <div
        className={`text-[#FAFAFA]/[.62] transition-all duration-300 ease-in-out font-satoshi font-bold lg:static lg:w-max lg:h-max lg:pt-0 lg:bg-transparent lg:block  fixed top-0 w-screen h-screen z-[-1] text-center items-center ${
          mobilenav
            ? "right-0 flex flex-col gap-[50px] bg-[#000512]/[.8] backdrop-blur pt-24"
            : "right-full flex flex-col gap-8 text-opacity-0"
        }`}
      >
        {NavItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="font-satoshi text-base hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent group transition-all duration-300 ease-in-out lg:ml-8"
            onClick={() => mobilenav && setmobilenav(!mobilenav)}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
