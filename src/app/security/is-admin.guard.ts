import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth-service";

export const IsAdminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot)=> {
    if(inject(AuthService).isAuthenticatedUser()){
      return true;
    }else{
      return inject(Router).createUrlTree(['']);
    }
}
