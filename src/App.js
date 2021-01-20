import React, {useState} from 'react';

let App = () => {
  const [chiffre, setChiffre] = useState({string: 1});
  increment = () => {
    this.setState({
      string: this.string + 1
    })
  };
  return (
    <div className="App">
      <span>{chiffre.string}</span> <br/>
      <button onClick={this.increment}>Click-icé</button>
    </div>
  );
};

export default App;