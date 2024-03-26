import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from './user.reducer';

export const selectUserState = (state: AppState) => state.user;

// export const userData = createSelector(
//   selectUserState,
//   (state: UserState) => state.user
// );

export const selectUsername = createSelector(
  selectUserState,
  (state: UserState) => state.user?.name
);

export const selectEmail = createSelector(
  selectUserState,
  (state: UserState) => state.user?.email
);

export const selectError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);
