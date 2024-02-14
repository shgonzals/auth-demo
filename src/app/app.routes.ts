import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'test', component: TestComponent}
];
