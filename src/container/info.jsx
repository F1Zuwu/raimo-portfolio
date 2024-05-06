import React from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
const InfoPage = () => {
    document.addEventListener('DOMContentLoaded', function () {

        gsap.to(".img-filter", {
            scale:1,
            duration:0.3
        })
        gsap.to(".load-in", {
            opacity:1,
            duration:0.4,
            delay:0.2
        })
        
        setTimeout(() => {
            gsap.fromTo(".nu", {opacity:0, y:30},{opacity:1, y:0})
            gsap.fromTo(".nk", {opacity:0, y:30,delay:0.1},{opacity:1, y:0,delay:0.1})
            gsap.fromTo(".nko", {opacity:0, y:30,delay:0.2},{opacity:1, y:0,delay:0.2})
            gsap.fromTo(".nn", {opacity:0, y:30,delay:0.3},{opacity:1, y:0,delay:0.3})

            setTimeout(() => {
                gsap.to(".load-deco", {width:0})
            }, 600);
        }, 400);

        const ele = document.getElementById('container-info');
        ele.style.cursor = 'grab';
    
        let pos = { top: 0, left: 0, x: 0, y: 0 };
    
        const mouseDownHandler = function (e) {
            ele.style.cursor = 'grabbing';
            ele.style.userSelect = 'none';
    
            pos = {
                left: ele.scrollLeft,
                top: ele.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            };
    
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };
    
        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;
    
            // Scroll the element
            ele.scrollTop = pos.top - dy;
            ele.scrollLeft = pos.left - dx;
        };
    
        const mouseUpHandler = function () {
            ele.style.cursor = 'grab';
            ele.style.removeProperty('user-select');
    
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };
    
        // Attach the handler
        ele.addEventListener('mousedown', mouseDownHandler);
    });
    return (
        <div class="h-full overflow-y-hidden">
            <Navbar></Navbar>

            <div class="calc-heigh">
                <img alt="bg" class="img-filter scale-125 absolute blur-md overflow-y-hidden w-full calc-heigh uninteractable" src={require("../assets/background.jpg")}></img>
                <div class="h-screen w-full flex items-center opacity-0 load-in">
                    <div id="container-info" class="absolute b-1 w-full flex pt-24 pb-24 overflow-x-scroll">
                    <img alt="deco" class="absolute -mt-24 w-full h-full uninteractable" src={require("../assets/image 1.png")}></img>
                    <img alt="deco" class="absolute top-6 left-6 nu opacity-0 uninteractable" src={require("../assets/ULT.png")}></img>
                        <div class="p-8 pl-16 nu opacity-0">
                            <div class="bg-white h-6 w-24 absolute load-in-anim load-deco">{ }</div>
                            <h1 class="text-white text-2xl rammetto-one-regular glitch">01</h1>
                            <h1 class="-mt-2 text-white glitch">{"//////////"}</h1>
                            <div class="pt-6">
                                <h1 class="rammetto-one-regular text-white text-xl glitch">Enesetutvustus</h1>
                                <p class="poppins-regular text-white w-96">Olen 17.aastane ja õpin hetkel Taru Rakenduslikus Kolledž'is ning mida iganes veel peab kirjutama enesetutvustuse bla bla bla.</p>
                            </div>
                        </div>
                        <div class="p-8 pl-16 nk opacity-0">
                            <h1 class="text-white text-2xl rammetto-one-regular glitch">02</h1>
                            <h1 class="-mt-2 text-white glitch">{"//////////"}</h1>
                            <div class="pt-6">
                                <div class="bg-white h-6 w-36 absolute load-in-anim load-deco">{ }</div>
                                <h1 class="rammetto-one-regular text-white text-xl glitch">Põhikool</h1>
                                <p class="poppins-regular text-white w-96">Olen lõpetanud Viljandi Kesklinna Koolis kirja rohkem midagi pls.</p>
                            </div>
                        </div>
                        <div class="p-8 pl-16 nko opacity-0">
                            <h1 class="text-white text-2xl rammetto-one-regular glitch">03</h1>
                            <h1 class="-mt-2 text-white glitch">{"//////////"}</h1>
                            <div class="pt-6">
                                <h1 class="rammetto-one-regular text-white text-xl glitch">Enesetutvustus</h1>
                                <div class="bg-white h-20 w-96 absolute load-in-anim load-deco">{ }</div>
                                <p class="poppins-regular text-white w-96">Olen 17.aastane ja õpin hetkel Taru Rakenduslikus Kolledž'is ning mida iganes veel peab kirjutama enesetutvustuse bla bla bla.</p>
                            </div>
                        </div>
                        <div class="p-8 pl-16 nn opacity-0">
                            <h1 class="text-white text-2xl rammetto-one-regular glitch">04</h1>
                            <div class="bg-white h-4 w-36 absolute load-in-anim load-deco">{ }</div>
                            <h1 class="-mt-2 text-white glitch">{"//////////"}</h1>
                            <div class="pt-6">
                                <h1 class="rammetto-one-regular text-white text-xl glitch">Enesetutvustus</h1>
                                <p class="poppins-regular text-white w-96">Olen 17.aastane ja õpin hetkel Taru Rakenduslikus Kolledž'is ning mida iganes veel peab kirjutama enesetutvustuse bla bla bla.</p>
                            </div>
                        </div>
                        <div class="p-8 pl-16 nv">
                            <img alt="deco" class="absolute -mt-36 -ml-24 w-1/2 h-full uninteractable" src={require("../assets/image 1.png")}></img>
                            <h1 class="text-white text-2xl rammetto-one-regular glitch">05</h1>
                            <h1 class="-mt-2 text-white glitch">{"//////////"}</h1>
                            <div class="pt-6">
                                <h1 class="rammetto-one-regular text-white text-xl glitch">Enesetutvustus</h1>
                                <p class="poppins-regular text-white w-96">Olen 17.aastane ja õpin hetkel Taru Rakenduslikus Kolledž'is ning mida iganes veel peab kirjutama enesetutvustuse bla bla bla.</p>
                            </div>
                        </div>
                        <div class="p-8 pl-16 nk">
                          <img alt="deco" class="absolute -bottom-16 right-6 w-8 h-8 uninteractable" src={require("../assets/Rectangle 8.png")}></img>
                            <h1 class="text-white text-2xl rammetto-one-regular glitch">06</h1>
                            <h1 class="-mt-2 text-white glitch">{"//////////"}</h1>
                            <div class="pt-6">
                                <h1 class="rammetto-one-regular text-white text-xl glitch">Enesetutvustus</h1>
                                <p class="poppins-regular text-white w-96">Olen 17.aastane ja õpin hetkel Taru Rakenduslikus Kolledž'is ning mida iganes veel peab kirjutama enesetutvustuse bla bla bla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPage;