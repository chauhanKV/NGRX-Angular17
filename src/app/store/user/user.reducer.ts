import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as UserActions from '../user/user.actions';

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.saveUser, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserActions.saveUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(UserActions.saveUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
