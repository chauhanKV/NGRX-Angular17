import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveUser } from '../../store/user/user.actions';
import { UserState } from '../../store/user/user.reducer';
import * as UserSelector from '../../store/user/user.selector';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss',
})
export class UserRegistrationComponent implements OnInit {
  username$!: Observable<string | undefined>;
  error$!: Observable<string | null>;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.username$ = this.store.select(UserSelector.selectUsername);
    this.error$ = this.store.select(UserSelector.selectError);
  }
  userForm!: FormGroup;

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  validateForm() {
    for (let i in this.userForm.controls) {
      this.userForm.controls[i].markAsTouched();
    }
  }

  onSaveUser() {
    if (this.userForm.valid) {
      this.store.dispatch(saveUser({ user: this.userForm.value }));
    } else {
      this.validateForm();
    }
  }
}
