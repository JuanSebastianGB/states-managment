import React, { Fragment } from 'react';
import { useLandingContext } from '../../context';
export interface Context3Interface {}

const Context3: React.FC<Context3Interface> = () => {
  const { stateContext } = useLandingContext() as any;
  return (
    <Fragment>
      <h3>Context from the component {Context3.name}</h3>
      <span>{stateContext}</span>
      <h4></h4>
    </Fragment>
  );
};

export default Context3;
