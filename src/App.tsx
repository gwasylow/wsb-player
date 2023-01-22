import Logo from './logo.svg'
import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './App.css'

function App() {
  const audio = new Audio(
    'https://wsbplayerstorage.blob.core.windows.net/music/intro.mp3',
  );

  const playClick = (songName: string) => {
    if (songName === 'intro') audio.src = 'https://wsbplayerstorage.blob.core.windows.net/music/intro.mp3';
    if (songName === 'correct') audio.src = 'https://wsbplayerstorage.blob.core.windows.net/music/correct.mp3';
    if (songName === 'fail') audio.src = 'https://wsbplayerstorage.blob.core.windows.net/music/fail.mp3';
 
    audio.load();
    audio.play();
  }

  const stopPlayingClick = () => {
    audio.pause();
    audio.currentTime = 0;
  }

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    marginTop: "10px",
    width: "250px"
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => playClick('intro')} style={myStyle}>PLAY INTRO</button>
        <button onClick={() => playClick('correct')} style={myStyle}>&gt;&gt; Play CORRECT</button>
        <button onClick={() => playClick('fail')} style={myStyle}>&gt;&gt; Play FAIL</button>
        <button onClick={stopPlayingClick} style={myStyle}>STOP Playing</button>

        <img src={Logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
