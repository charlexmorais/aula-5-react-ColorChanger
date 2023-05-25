import React, { useState } from 'react';
import ColorChanger from './ColorChanger';

function App() {
  const [showColorChanger, setShowColorChanger] = useState(true);

  const handleRemoveColorChanger = () => {
    setShowColorChanger(false);
    alert('Component ColorChanger has been removed.');
  };

  return (
    <div>
      <h1>Exercício de Mudança de Cor</h1>
      {showColorChanger && <ColorChanger />}
      <button onClick={handleRemoveColorChanger}>Remove ColorChanger</button>
    </div>
  );
}

export default App;

