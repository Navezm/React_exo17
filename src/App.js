import React, {useState} from 'react';

let App = () => {
  const [chiffre, setChiffre] = useState({string: 1});
  return (
    <div className="App">
      <span>{chiffre.string}</span> <br/>
      <button>Click-icé</button>
    </div>
  );
};

export default App;