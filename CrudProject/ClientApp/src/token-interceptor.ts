import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DetailsComponent } from './app/details/details.component';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     let Jwt = localStorage.getItem('jwt');
    if (Jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${Jwt}`
       }
  });
   }

    return next.handle(request).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(['/login']);
          // this.detailscomponent.logOut()
          // location.reload(true);
        } else {
          const error = err.error.message;
          return throwError(error);
        }
      }
      else {
            console.log("success");    
      }
    })
 
	)
  }
}
