import { sharingInformationService } from '@/services';
import { StyledContainer } from '@/styled-components';
import React, { useEffect, useState } from 'react';
export interface Component2Interface {}

const Component2: React.FC<Component2Interface> = () => {
  const [temporal, setTemporal] = useState('');
  const [counter, setCounter] = useState(0);
  useEffect((): void => {
    sharingInformationService.getSubject.subscribe((incomingData): void => {
      console.log(incomingData);
      setTemporal(incomingData);
      setCounter(counter + 1);
    });
  }, [counter]);
  return (
    <StyledContainer>
      <div>
        <h2>{Component2.name}</h2>
        <p>{temporal}</p>
        <div>
          <h3>Counter inside component 2 : {counter}</h3>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Component2;
