import './App.css';
import { Image, Switch } from 'antd';
import { useState } from 'react';

function App() {
  const [DCR, setDCR] = useState(true);

  return (
    <div className="App">
      <span class="titleSpan"><img src="title.png" alt="fallout-font" border="0" /></span>

      {/* classical- https://open.spotify.com/embed/playlist/24hFTiVobvxt554Oh9bm6g?utm_source=generator */}
      {/* <h1>Wasteland Radio Station</h1> */}
      <span class="titleSpan"><img src="https://fontmeme.com/permalink/220202/7a3a3932b0e1a6d8535281496a1d5afa.png" alt="fallout-font" border="0" class="titletext" /></span>
      <iframe title="song-playlist" class="playlist" src="https://open.spotify.com/embed/playlist/11EqHijOXQDZ1pfKSCu0h7?utm_source=generator" frameBorder="" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

    </div>
      
    </div >
  );
}

export default App;
