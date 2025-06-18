"use client";
import { useEffect } from 'react';
import AOS from "aos";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
      delay: 50
    });
  }, [])

  return null
}

export default AOSInit;