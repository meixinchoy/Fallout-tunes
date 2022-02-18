import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

$(function () {
  var body = $('body');
  var backgrounds = ["https://res.cloudinary.com/da3huoaca/image/upload/v1645066767/fallout-tunes/bg1_brfqlu.jpg", 'https://res.cloudinary.com/da3huoaca/image/upload/v1645066997/fallout-tunes/bg6_cdadah.jpg', 'https://res.cloudinary.com/da3huoaca/image/upload/v1645067004/fallout-tunes/bg2_hgymkz.png', 'https://res.cloudinary.com/da3huoaca/image/upload/v1645067000/fallout-tunes/bg7_ycw351.png', 'https://res.cloudinary.com/da3huoaca/image/upload/v1645066996/fallout-tunes/bg9_aeqb7k.jpg', 'https://res.cloudinary.com/da3huoaca/image/upload/v1645067012/fallout-tunes/bg5_p9rxel.png', 'https://res.cloudinary.com/da3huoaca/image/upload/v1645067000/fallout-tunes/bg8_fslrqc.jpg', 'https://res.cloudinary.com/da3huoaca/image/upload/v1645066997/fallout-tunes/bg4_aaptwh.jpg', 'https://res.cloudinary.com/da3huoaca/image/upload/v1645067000/fallout-tunes/bg3_adlhg1.jpg'];

  var current = 0;

  function nextBackground() {
    body.css('background-size', 'cover');

    body.css("background-image", "url(" + backgrounds[current = ++current % backgrounds.length] + ")");

    // body.fadeOut("slow", function () {
    //   $(this).css("background-image", "url(" + backgrounds[current = ++current % backgrounds.length] + ")");
    //   $(this).fadeIn("slow");
    // });

    setTimeout(nextBackground, 300000);
  }

  body.css('background-size', 'cover');
  body.css(
    'background',
    "url(" + backgrounds[0] + ")"
  );
  setTimeout(nextBackground, 300000);
});

// $(function () {

//   var backgrounds = [
//     `url("../public/bg1.jpg")`,
//     `url("../public/fallout4_poster.jpg")`];
//   var current = 0;

//   function nextBackground() {
//     $('html').css(
//       'background',
//       backgrounds[current = ++current % backgrounds.length]);

//     setTimeout(nextBackground, 5000);
//   }
//   setTimeout(nextBackground, 5000);
//   $('html').css('background', backgrounds[0]);
// });

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
