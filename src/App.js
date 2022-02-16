import './App.css';
import { Image, Switch } from 'antd';
import { useState } from 'react';

function App() {
  const [DCR, setDCR] = useState(true);

  return (
    <div className="App">
      <span class="titleSpan"><img src="title.png" alt="fallout-font" border="0" /></span>

      <div className="inline-items">
        <span className='vertical'>
          <Switch className="radioSwitch" checkedChildren="Diamond City Radio" unCheckedChildren="Classical radio station" defaultChecked onChange={() => setDCR(!DCR)} />
          <iframe title="song-playlist" className="playlist" src={DCR ? "https://open.spotify.com/embed/playlist/11EqHijOXQDZ1pfKSCu0h7?utm_source=generator" : "https://open.spotify.com/embed/playlist/24hFTiVobvxt554Oh9bm6g?utm_source=generator"} frameBorder="" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </span>

      </div>
      
    </div>
  );
}

export default App;
