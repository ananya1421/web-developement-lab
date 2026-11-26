import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">

      <header>
        <h1>Ananya Gupta</h1>
        <p>Student | Web Developer</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Hello! I am a student interested in
          web development and programming.
          I love learning new technologies.
        </p>
      </section>

      <section>
        <h2>My Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>

      <section>
        <h2>My Projects</h2>
        <ul>
          <li>To-Do List</li>
          <li>Chessboard</li>
          <li>Snake and Ladder Game</li>
        </ul>
      </section>

      <section>
        <h2>Contact Me</h2>
        <p>Email: your-email@example.com</p>
      </section>

      <footer>
        <p>© 2026 Ananya Gupta</p>
      </footer>

    </div>
  );
}

export default App;
