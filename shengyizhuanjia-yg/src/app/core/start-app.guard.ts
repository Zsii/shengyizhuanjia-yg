import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../shared/local-storage.service';

export const APP_KEY = 'App';

@Injectable({
  providedIn: 'root'
})
export class StartAppGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const appConfig: any = this.localStorageService.get(APP_KEY, {
        Launched: false,
        version: '1.0.0.0'
      });
      if ( appConfig.Launched === false ) {
        appConfig.Launched = true;
        this.localStorageService.set(APP_KEY, appConfig);
        return true;
      } else {
        this.router.navigateByUrl('folder/hello');
        return false;
  }

}
}
