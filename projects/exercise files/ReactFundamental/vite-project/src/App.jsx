import React, { useState } from 'react';

const App = () => {

const [myObject, setMyObject] = useState({
  key1: "Laci",
  key2: "Laci 2",
  key3: "Laci 3"
});

const change = () => {
  setMyObject(
    prevObj=>({
      ...prevObj,
      key1: "hi how are you",
      key2: "what is your name"
    })
  )
}

  return (
    <div>
      <h1>{myObject.key1}</h1>
      <h1>{myObject.key2}</h1>
      <button onClick={change}>Change</button>
    </div>
  );
};

export default App;