// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Tristan.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          Full stack web developer leveraging background in history, and library science to provide unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from the University of North Carolina at Chapel Hill Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution. I am skilled in HTML5, CCS, Bootstrap, and JavaScript, jQuery, Node.js, React.js, MERN Stack, MongoDB, MySQL, and NoSQL. Having an appetite for continuous learning, collaboration, and problem-solving, I plan to create and maintain websites, while also developing iOS & Android apps. Equally passionate about building applications that assist everyday people to make their lives easier. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Tristan
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Picture1.jpg"
          />
        </div>
      </div>
    </section>
  );
}