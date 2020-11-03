import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { __messageSnackBar } from 'src/app/shared/constants/utils';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent {

  isLoading : boolean = false
    loginGroup: FormGroup

    constructor(
        private _router     : Router,
        private snackBar    : MatSnackBar,
    ) {
        this.loginGroup = new FormGroup({
            email   : new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required])
          })
    }

    async loginUser() {
        try {
          this.isLoading = true
          this._router.navigate(['main']);
        } catch (err) {
          this.isLoading = false
          __messageSnackBar(this.snackBar, err.error.message)
          this.loginGroup.enable()
        }
      }

}
