import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <title>Wasteland Radio Station</title>
        <meta name="description" content="Wasteland Radio Station" />
        <link rel="icon" href="/icon.ico" />
      </header>
      {/* classical- https://open.spotify.com/embed/playlist/24hFTiVobvxt554Oh9bm6g?utm_source=generator */}
      <iframe title="song-playlist" class="playlist" src="https://open.spotify.com/embed/playlist/11EqHijOXQDZ1pfKSCu0h7?utm_source=generator" frameBorder="" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
  );
}

export default App;
