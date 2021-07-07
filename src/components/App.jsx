import React from "react";
import emojipedia from '../emojipedia';
import Entry from './Entry';

function create_card(emojiterm){
  return(
    <Entry 
    key = {emojiterm.id}
    emoji ={emojiterm.emoji}
    name = {emojiterm.name}
    meaning = {emojiterm.meaning}
    />
    
  );

}

function App() {
  return (
  <div>
    <dl className="dictionary">
    <h1>
      <span>emojipedia</span>
    </h1>

  {emojipedia.map(create_card)}
 
    </dl>
  </div>
  );
}

export default App;
