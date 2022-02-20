import './App.css';
import { Switch } from 'antd';
import { useState, useEffect } from 'react';
import $ from 'jquery';

function App() {

  $(function () {
    var body = $('body');
    var backgrounds = ["bg/bg1.jpg", "bg/bg6.jpg", "bg/bg2.png", "bg/bg7.jpg", "bg/bg9.jpg", "bg/bg5.jpg", "bg/bg8.jpg", "bg/bg4.jpg", "bg/bg3.jpg"];

    var current = 0;

    function nextBackground() {
      const img = new Image()
      current = ++current % backgrounds.length
      img.src = backgrounds[current]
      img.onload = () => {
        body.css("background-image", "url('" + backgrounds[current] + "')");
      }

      setTimeout(nextBackground, 300000);
    }
    const img0 = new Image()
    img0.src = backgrounds[0]
    img0.onload = () => {
      body.css("background-image", "url('" + backgrounds[0] + "')");
    }
    setTimeout(nextBackground, 300000);
  });

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
