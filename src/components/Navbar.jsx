import React from "react";
import { LoadNewView } from "../container/Home";
import gsap from "gsap";
const Ico1 = require("../assets/Ellipse 1.png")
const Ico2 = require("../assets/Rectangle 7.png")
const Ico3 = require("../assets/Rectangle 8.png")

const Navbar = () => {

  window.addEventListener("DOMContentLoaded", () => {
    const decoAsset = document.getElementById("navbar-deco-asset")

    setInterval(() => {
      decoAsset.src = Ico1
      setTimeout(() => {
        decoAsset.src = Ico2
      }, 220);
      setTimeout(() => {
        decoAsset.src = Ico3
      }, 420);
    }, 660);

    if(window.location.pathname === "/info") {
      gsap.to(".home", {backgroundColor: "transparent", borderBottomColor: "transparent"})
      gsap.to(".info", {backgroundColor: "#27272A"})

      document.getElementById("title").innerHTML = "INFO"
    } else if(window.location.pathname === "/news") {
      gsap.to(".home", {backgroundColor: "transparent", borderBottomColor: "transparent"})
      gsap.to(".news", {backgroundColor: "#27272A"})

      document.getElementById("title").innerHTML = "NEWS"
    }
  })

  return (
    <div class="h-12 w-full flex items-center b-1 bg-img">
      <div title="Home" class="home h-12 w-12 flex bg-zinc-800 border-b border-zinc-400 justify-center items-center cursor-pointer anim-smaller-hover" onClick={() => window.location.href = "/"}>
        <img alt="" class="h-5 w-6" src={require("../assets/Rectangle 6.png")}></img>
      </div>
      <div class="flex absolute right-16">
        <div title="About me" class="info h-12 w-12 flex border-b border-zinc-400 justify-center items-center cursor-pointer anim-smaller-hover" onClick={() => LoadNewView("info")}>
          <img alt="" class="h-5 w-6" src={require("../assets/icons8-about-96.png")}></img>
        </div>
        <div title="News" class="news h-12 w-12 flex border-b border-zinc-400 justify-center items-center cursor-pointer anim-smaller-hover" onClick={() => LoadNewView("news")}>
          <img alt="" class="h-5 w-6" src={require("../assets/icons8-newspaper-100.png")}></img>
        </div>
      </div>
      <img alt="deco" id="navbar-deco-asset" class="w-6 h-6 absolute right-4 uninteractable" src={require("../assets/Rectangle 7.png")}></img>
      <h1 id="title" class="text-white rammetto-one-regular text-2xl glitch ml-4 mt-0.5">HOME</h1>
    </div>
  )
}

export default Navbar;