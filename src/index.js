import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

$(function () {
  var body = $('body');
  var backgrounds = ["bg/bg1.jpg", "bg/bg6.jpg", "bg/bg2.png", "bg/bg7.jpg", "bg/bg9.jpg", "bg/bg5.jpg", "bg/bg8.jpg", "bg/bg4.jpg", "bg/bg3.jpg"];

  var current = 0;

  function nextBackground() {
    body.css("background-image", "url('" + backgrounds[current = ++current % backgrounds.length] + "')");

    // body.fadeOut("slow", function () {
    //   $(this).css("background-image", "url(" + backgrounds[current = ++current % backgrounds.length] + ")");
    //   $(this).fadeIn("slow");
    // });

    setTimeout(nextBackground, 3000);
  }

  body.css(
    'background',
    "url(" + backgrounds[0] + ")"
  );
  setTimeout(nextBackground, 3000);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
