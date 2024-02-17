import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../security/auth-service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    public authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ){}

  onClick(){
    this.loading = true;


    if(this.authService.login(this.username, this.password)) {
      this.router.navigate(['test']);
    } else {
      this.loading = false;
      this._snackBar.open("Error en la autenticación", "Cerrar");
    }
  }
}
