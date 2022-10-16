import { AppStore, User } from '@/models';
import { modifyUser, resetUser } from '@/redux/states/userSlice';
import { StyledButton, StyledInput } from '@/styled-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
export interface ReduxComponent2Interface {}

const ReduxComponent2: React.FC<ReduxComponent2Interface> = () => {
  const user = useSelector((store: AppStore): User => store.user);
  const dispatch = useDispatch();
  const handleChange = (e: any): void => {
    const modifiedUser = { ...user, [e.target.name]: e.target.value };
    dispatch(modifyUser(modifiedUser));
  };
  const handleResetUser = (e: any): any => {
    dispatch(resetUser({}));
  };

  return (
    <div>
      <h3>{ReduxComponent2.name}</h3>
      <pre>{JSON.stringify(user)}</pre>
      <form action="">
        <label htmlFor="" style={{ display: 'inline-block' }}>
          name
          <StyledInput
            type="text"
            value={user.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="" style={{ display: 'inline-block' }}>
          email
          <StyledInput
            type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </label>
      </form>
      <StyledButton onClick={handleResetUser}>Reset user</StyledButton>
    </div>
  );
};

export default ReduxComponent2;
