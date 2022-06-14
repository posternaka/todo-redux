import React from 'react';
import { useState } from 'react';


function Todo() {
  const [value, setValue] = useState(["выпить чай", "посмотреть фильм", "поспать"]);
  const [some, setSome] = useState('');

  const resetSome = () => {
    setSome('')
    setValue([...value,  some])
  }

  return (
    <div>
      <input type="text" value={some} onChange={(e) => setSome(e.target.value)}/>
      <button onClick={() => resetSome()}>Добавить</button>
      {value.map((item, index) => (
        <p key={index}>{item}</p>
      )).reverse()}
    </div>
  )
}

export default Todo;