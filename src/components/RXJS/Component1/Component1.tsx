import { sharingInformationService } from '@/services/sharing-information-service';
import { StyledButton, StyledContainer } from '@/styled-components';
import React, { useState } from 'react';
export interface Component1Interface {}

const Component1: React.FC<Component1Interface> = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = (): void => {
    setCounter(counter + 1);
    sharingInformationService.setSubject = `This is a super secret information inside component 1, ${counter}`;
  };
  return (
    <StyledContainer>
      <div>
        <h2>{Component1.name}</h2>
        <p>Counter value : {counter}</p>
        <StyledButton onClick={handleClick}>Send information</StyledButton>
      </div>
    </StyledContainer>
  );
};

export default Component1;
