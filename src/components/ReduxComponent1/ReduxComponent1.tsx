import { AppStore, User } from '@/models';
import { createUser, userInitialState } from '@/redux/states/userSlice';
import { StyledButton, StyledContainer } from '@/styled-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
export interface ReduxComponent1Interface {}

const ReduxComponent1: React.FC<ReduxComponent1Interface> = () => {
  const dispatch = useDispatch();
  const sendData = (): void => {
    const user: User = { ...userInitialState, name: 'Sebastian' };
    dispatch(createUser(user));
  };
  const userState = useSelector((store: AppStore): User => store.user);
  return (
    <StyledContainer>
      <h3>{ReduxComponent1.name}</h3>
      <StyledButton onClick={sendData}>Create user</StyledButton>
      <pre>{JSON.stringify(userState)}</pre>
    </StyledContainer>
  );
};

export default ReduxComponent1;
