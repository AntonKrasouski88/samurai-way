import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const postData = [
  {message:"Hi, how are you?", like: 5},
  {message:"It's my first post", like: 10},
]

let dialogs = [
  {id:1, name: "Dimcho"},
  {id:2, name: "Albert"},
  {id:3, name: "Tanya"},
  {id:4, name: "Ilan"},
]

let messages = [
  {id: 1, letter: "What's up bro"},
  {id: 2, letter: "How are your it-kamasutra?"},
  {id: 3, letter: "What do yuo do?"},
]



ReactDOM.render(
    <App postData ={postData} 
    dialogs = {dialogs} 
    messages = {messages} />,
  document.getElementById('root')
);