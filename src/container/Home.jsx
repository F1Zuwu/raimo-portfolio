import React from "react";
import Navbar from "../components/Navbar";
import News from "../components/News";
import gsap from "gsap";
import '../scrollbar.css'

export const LoadNewView = (href) => {
  if (href === "news") {
    gsap.to(".anim-out", { x: -30, opacity: 0, duration: 0.25 })
    gsap.to(".image-load-in", { scale: 0.8, opacity: 0, duration: 0.25 })
  } else {
    gsap.to(".anim-out", { x: -30, opacity: 0, duration: 0.25 })
    gsap.to(".image-load-in", { scale: 1.2, duration: 0.25 })
  }
  setTimeout(() => {
    window.location.href = href
  }, 240);
}

const Home = () => {
  function calculateAge(birthYear, birthMonth, birthDay) {
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthYear;
    if (
      currentDate.getMonth() < birthMonth - 1 ||
      (currentDate.getMonth() === birthMonth - 1 && currentDate.getDate() < birthDay)
    ) {
      age--;
    }

    return age;
  }

  window.onload = function () {
    gsap.to(".load-in-anim", { width: 0 })
    gsap.to(".load-in-anim-1", { width: 0, delay: 0.1 })
    gsap.to(".load-in-anim-2", { width: 0, delay: 0.2 })

    gsap.to(".image-load-in", {
      scale: 1,
      'webkitFilter': 'blur(15px)',
    })
  }

  return (
    <div class="h-full overflow-hidden">
      <Navbar></Navbar>

      <div class="calc-heigh">
        <img alt="bg" class="img-filter absolute scale-110 overflow-hidden image-load-in w-full calc-heigh" src={require("../assets/background.jpg")}></img>
        <div class="absolute h-full flex items-center justify-center linear w-1/2">
          <div class="mb-8 -ml-48 anim-out">
            <div class="bg-white h-12 w-1/2 absolute load-in-anim">{ }</div>
            <div class="bg-white h-8 w-1/2 absolute load-in-anim-2 mt-24">{ }</div>
            <div class="bg-white h-8 w-1/2 absolute load-in-anim-1 mt-14">{ }</div>
            <h1 class="text-6xl rammetto-one-regular text-white glitch">Raimo Kivi</h1>
            <h2 class="plaster-regular text-2xl text-white glitch">Disainer Tarkvaraarendaja</h2>
            <p class="text-xl poppins-regular text-white glitch">Olen {calculateAge(2006, 8, 2)}. aastane VOCO õpilane ja oskan reacti {"<3"}</p>
          </div>
        </div>
        <div class="absolute left-0 top-12 h-full overflow-hidden anim-out">
          <div class="scrollup-deco">{ }</div>
        </div>
        <div class="absolute right-12 bottom-12 overflow-hidden anim-out">
          <News></News>
        </div>
      </div>
    </div>
  )
}

export default Home;