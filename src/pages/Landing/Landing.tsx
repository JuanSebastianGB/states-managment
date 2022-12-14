import { StyledContainer } from '@/styled-components';
import React from 'react';
import { Context1, Context2, ReduxComponent2 } from './components';
import { LandingProvider } from './context';
export interface LandingInterface {}

const Landing: React.FC<LandingInterface> = () => {
  return (
    <div>
      <StyledContainer>
        <LandingProvider>
          <Context1 />
          <Context2 />
          <ReduxComponent2 />
        </LandingProvider>
      </StyledContainer>
    </div>
  );
};

export default Landing;
