import React, {useState} from 'react';

let App = () => {
  const [chiffre, setChiffre] = useState(1);
  
  return (
    <div className="App">
      <span>{chiffre}</span> <br/>
      <button onClick={() => {setChiffre(chiffre+1)}}>Click-icé</button>
    </div>
  );
};

export default App;