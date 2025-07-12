import { useState } from 'react';

function App() {
  const [name, setName] = useState('Jomerubaldo');
  const [isChecked, setIsChecked] = useState(true);
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange']);
  const [object, setObject] = useState({ name: 'Jomer', age: 21 });

  return (
    <>
      {fruits.map((fruits, index) => (
        <li key={index}>{fruits}</li>
      ))}
    </>
  );
}

export default App;
