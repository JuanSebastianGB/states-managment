import { StyledButton, StyledInput } from '@/styled-components';
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
        <StyledInput
          type="text"
          value={inputValue}
          name={inputValue}
          placeholder="Data"
          onChange={(e): void => setInputValue(e.target.value)}
        />
      </label>
      <StyledButton>send</StyledButton>
    </form>
  );
};

export default Context1;
