import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <header>
        <h1>Hi, I'm Suraj Mahto</h1>
        <p>Frontend / Full Stack Developer</p>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer skilled in Java, JavaScript, React, and Node.js.
          I love building modern web applications and solving real-world problems with code.
        </p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Portfolio Website</h3>
            <p>A personal portfolio built using HTML, CSS, and React.</p>
          </li>
          <li>
            <h3>To-Do List App</h3>
            <p>A simple to-do list app using JavaScript and local storage.</p>
          </li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: suraj@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/surajmahto">linkedin.com/in/surajmahto</a></p>
      </section>


      <footer>
        <p>&copy; 2025 Suraj Mahto. All rights reserved.</p>
      </footer>
    </div>
  );
}
