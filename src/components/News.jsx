import React, {useState} from "react";
import gsap from "gsap";
import { LoadNewView } from "../container/Home";
const { initializeApp } = require("firebase/app");
const { getDatabase, get, ref, query } = require("firebase/database");

const News = () => {

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

  window.addEventListener("DOMContentLoaded", () => {
    get(query(ref(database, "/newsSpotlight"))).then((snapshot) => {
      setNews(snapshot.val())
    })

    setTimeout(() => {
      gsap.fromTo(".conatiner", {opacity:0, y:30}, {opacity:1, y:0})
      setTimeout(() => {
        gsap.fromTo(".title", {opacity:0, y:20}, {opacity:1, y:0})
      }, 100);
    }, 300);
  })

  return (
    <div>
      <h1 class="text-white rammetto-one-regular glitch text-xl opacity-0 title">NEWS</h1>
      <h1 class="text-white glitch -mt-2 opacity-0 title">////////////////////</h1>
      <div class="flex justify-start conatiner opacity-0 b-1 p-2 rounded-md">
        {news.map((value, index) => {
          return (
            <div class="h-32 w-64 rounded-md p-2 ml-2 mr-2 hover-anim-news-panel" key={index}>
              <img alt="" class="rounded-md h-full w-full cursor-pointer" src={value.image} onClick={() => LoadNewView("/news")}></img>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default News;