import React, { useState } from 'react';
import { useLandingContext } from '../../context';
export interface Context1Interface {}

const Context1: React.FC<Context1Interface> = () => {
  const { setStateContext } = useLandingContext() as any;
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setStateContext(inputValue);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        {Context1.name}&nbsp;
        <input
          type="text"
          value={inputValue}
          name={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Context1;
