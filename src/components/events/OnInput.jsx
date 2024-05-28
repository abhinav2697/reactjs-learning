import React, { useState } from 'react';
const OnInput = () => {
  const [value, setValue] = useState('');
  const [input, setInput] = useState('Q1');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChanger = (e) => {
    setInput(e.target.value);
  };
  return (
    <div
      style={{
        textAlign: 'center',
        margin: 'auto'
      }}
    >
      <h1 style={{ color: 'Green' }}>Hello</h1>
      <h3>Example for React OnInput Event Handler</h3>
      <input value={value} onInput={handleChange}></input>
      <br />
      <div>User Input:-{value}</div>
      <select value={input} onInput={handleChanger}>
        <option value={'Q1'}>Q1</option>
        <option value={'Q2'}>Q2</option>
        <option value={'Q3'}>Q3</option>
      </select>
      <br />
      <br />
      <br />
      <div>User Input:- {input}</div>
    </div>
  );
};
export default OnInput;
