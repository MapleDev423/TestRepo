import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuarkCamera from './components/QuarkCamera';
import IndexComponent from './components/NewQuarkCamera';
import * as serviceWorker from './serviceWorker';
/*
const videoJsOptions = {
  controls: false,
  width: 320,
  height: 240,
  fluid: false,
  bigPlayButton: false,
  controlBar: {
      volumePanel: false
  },
  plugins: {
      record: {
          audio: false,
          video: true,
          maxLength: 10,
          displayMilliseconds: false,
          debug: true
      }
  }
};
/*
ReactDOM.render(
    <QuarkCamera { ...videoJsOptions }/>,
  document.getElementById('root')
*/
ReactDOM.render(
  <IndexComponent/>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();