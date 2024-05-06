import React, { useState } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
const { initializeApp } = require("firebase/app");
const { getDatabase, get, ref, query } = require("firebase/database");

const NewsPage = () => {

    const [news, setNews] = useState([])

    const firebaseConfig = {
        apiKey: "AIzaSyCT6auOjQEdZq20iuAahMFTvAX4J1BExQk",
        authDomain: "portfoolio-8ea6c.firebaseapp.com",
        databaseURL: "https://portfoolio-8ea6c-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "portfoolio-8ea6c",
        storageBucket: "portfoolio-8ea6c.appspot.com",
        messagingSenderId: "271304716965",
        appId: "1:271304716965:web:5b7ae2a8578798314c134c"
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    window.onload = function () {
        get(query(ref(database, "/news"))).then((snapshot) => {
            setNews(snapshot.val())
            console.log(snapshot.val())
        })

        gsap.fromTo(".title", {opacity:0, x:-30}, {opacity:1, x:0})
        gsap.to(".img-filter", {
            scale:1,
            opacity:1,
            duration:0.3,
            'webkitFilter': 'blur(0px)',
        })
        setTimeout(() => {
            gsap.fromTo(".news-container", {opacity:0, y:-30}, {opacity:1, y:0})
        }, 300);
    }

    return (
        <div>
            <Navbar></Navbar>
            <img alt="bg" class="img-filter scale-75 blur-sm opacity-0 absolute overflow-y-hidden w-full calc-heigh uninteractable" src={require("../assets/image 1.png")}></img>
            <div class="w-full h-full flex justify-center">
              <div class="w-1/2">
              <h1 class="pt-8 text-white text-2xl glitch rammetto-one-regular title opacity-0">NEWS</h1>
              <h1 class=" text-white glitch title opacity-0">{"/////////////////////"}</h1>
                {news.map((val, index) => {
                    return (
                        <div key={index} class="rounded-md mt-8 b-1 news-container relative opacity-0">
                            <h1 class="absolute rammetto-one-regular right-8 top-8 text-white">0{Math.floor(index + 1)}</h1>
                            <h1 class="absolute rammetto-one-regular right-8 top-12 text-white">----</h1>
                            <h1 class="text-white pb-2 pl-8 mt-16 pt-8 glitch rammetto-one-regular text-xl">{val.title}</h1>
                            <p class="text-white poppins-regular pl-8 pb-8 text-lg">{val.content}</p>
                            <img class="w-full -mb-8 h-0 rounded-b-md img" alt="image" src={val.image}></img>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default NewsPage;