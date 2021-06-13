import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Amplify from '@aws-amplify/core';
import { Auth } from 'aws-amplify';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router
  ) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  /** signup */
  public signUp(email, password): Observable<any> {
    return from(Auth.signUp(email, password));
  }

  /** confirm code */
  public confirmSignUp(email, code): Observable<any> {
    return from(Auth.confirmSignUp(email, code));
  }

  /** signin */
  public signIn(email, password): Observable<any> {
    return from(Auth.signIn(email, password))
      .pipe(
        tap(() => this.loggedIn.next(true))
      );
  }

  /** get authenticat state */
  public isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
  }

  /** signout */
  public signOut() {
    from(Auth.signOut())
      .subscribe(
        result => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
  }
}
