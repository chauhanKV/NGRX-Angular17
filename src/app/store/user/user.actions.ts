import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const saveUser = createAction(
  '[User] Save User',
  props<{ user: User }>()
);

export const saveUserSuccess = createAction(
  '[User] Save User Success',
  props<{ user: User }>()
);

export const saveUserFailure = createAction(
  '[User] Save User Failure',
  props<{ error: any }>()
);
