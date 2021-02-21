import './App.css';
import React,{Component} from 'react';

class App extends Component{
  render(){
    return(
      <div className="container">
        <svg id="back" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#07A6F0"/>
        </svg>

        <svg id="close" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
        </svg>

        <div className="enter">Enter the 4-digit code sent to</div>
        <div className="num">+91******1234</div>
        
        <div className="dashlines">
        <svg id="dash1" width="58" height="1" viewBox="0 0 58 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="57.4324" y2="0.5" stroke="#9798C2"/>
        </svg>
        <svg id="dash2" width="58" height="1" viewBox="0 0 58 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.432373" y1="0.5" x2="57.8648" y2="0.5" stroke="#9798C2"/>
        </svg>
        <svg id="dash3" width="59" height="1" viewBox="0 0 59 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.864746" y1="0.5" x2="58.2972" y2="0.5" stroke="#9798C2"/>
        </svg>
        <svg id="dash4" width="58" height="1" viewBox="0 0 58 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.297119" y1="0.5" x2="57.7295" y2="0.5" stroke="#9798C2"/>
        </svg></div>

        <div className="resend">Resend code</div>

        <button type="submit" id="cont">Continue</button> 
        </div>
    );
  }
}

export default App;