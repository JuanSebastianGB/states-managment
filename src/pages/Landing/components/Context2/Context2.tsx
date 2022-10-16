import React from 'react';
import { useLandingContext } from '../../context';
export interface Context2Interface {}

const Context2: React.FC<Context2Interface> = () => {
  const { stateContext } = useLandingContext() as any;

  return (
    <div>
      <h4>{Context2.name}</h4>
      <span>
        {stateContext ? (
          <span
            style={{
              padding: '1rem',
              backgroundColor: 'gray',
              color: 'white',
              borderRadius: '10px',
            }}
          >
            {stateContext}
          </span>
        ) : (
          <h4>Initial Data</h4>
        )}
      </span>
    </div>
  );
};

export default Context2;
