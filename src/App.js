import './App.css';
import React, { useEffect, useState, fetchData  } from 'react';




function App() {

const refresh = () => window.location.reload(true);
  


const buttonTextItems = [
 'Oh What a relief it is',
 'Omg it is a relief',
 'Oh man oh man it is something'];

const initialgameState={

victory:false,
startTime: null,
endTime:null,
}

// States
 const[snippet, setSnippet] = useState('');
  const [userText, setUserText] = useState('');
const [gameState, setGameState] = useState(initialgameState);
const [wins, setWins] = useState(null);
const [hasError, setHasError] = useState(false);
const [films,setFilms] = useState([]);

////////////////////////////////








  const updateUserText = (event) => {
setUserText(event.target.value);

if(event.target.value === snippet){
setGameState({
  ...gameState,
  victory:true,
   endTime:new Date().getTime() - gameState.startTime 
});

 }
  };


let timeInSecs = gameState.endTime /1000;









 const  chooseSnippet = (index) => {
setSnippet(buttonTextItems[index]);
 setGameState({ ...gameState, startTime:new Date().getTime()});
 }






  return (
    <div>
       <h2 className='title' >Type Race</h2>      
       <h3>'Click What You Want to Type From The List Below'</h3>
       
       <div> 
{buttonTextItems.map((textItem,index)=> <button className='snippetOptions' onClick={() => chooseSnippet(index)}>{textItem}</button>)}
       </div>
       <div>{snippet} </div>
       <input value ={userText} onChange={updateUserText}/> 
    
       <h4>{gameState.victory ? `You Win: ${timeInSecs} Secs`: "You Suck"}</h4>
     <button onClick ={refresh}>Play Again</button>
     
        </div>









  );
};



export default App; 
