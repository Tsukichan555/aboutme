"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#f7cac9] to-[#e6e6e6]">
      <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center">
        <img
          src="/icon.jpeg"
          alt="A profile icon representing Natsuki NISHIKAWA"
          className="w-[200px] h-[200px] rounded-full mb-4"
        />
        <h1 className="font-bold text-lg mb-2">Natsuki NISHIKAWA</h1>
        <p className="text-[#6e6e6e] text-sm font-roboto mb-2">
          Nagoya University | History | Digital Humanities{/* | CS enthusiast */}
        </p>
        {/* <p className="text-[#a1a1a1] text-xs font-noto-sans mb-4">
          卒論ではデータサイエンス手法を取り入れた中世イングランド史研究を進めています!
        </p> */}
        <div className="flex space-x-2">
          <a
            href="https://twitter.com/nocturnalanrutc"
            className="fab fa-twitter text-[#636363] p-2 rounded-full"
          ></a>
          <a
            href="https://github.com/Tsukichan555"
            className="fab fa-github text-[#636363] p-2 rounded-full"
          ></a>
          <a
            href="https://www.instagram.com/_ainome_/"
            className="fab fa-instagram text-[#636363] p-2 rounded-full"
          ></a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;