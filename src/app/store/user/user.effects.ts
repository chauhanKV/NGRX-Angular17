import { Injectable } from '@angular/core';
import * as UserActions from './user.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../service/user.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}
  saveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.saveUser),
      mergeMap(({ user }) =>
        this.userService.saveUser(user).pipe(
          map((response) => UserActions.saveUserSuccess({ user: response })),
          catchError((error) =>
            of(UserActions.saveUserFailure({ error: 'Error while loading' }))
          )
        )
      )
    )
  );
}
