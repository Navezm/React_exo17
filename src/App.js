import React, {useState} from 'react';
import Compo from './Compo';

let App = () => {

  const [chiffre, setChiffre] = useState(0);
  
  return (
    <div className="App">
      <span>{chiffre}</span> <br/>
      <Compo fct={(e) => setChiffre(chiffre + e)}/>
    </div>
  );
};

export default App;