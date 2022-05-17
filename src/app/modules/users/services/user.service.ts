import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserI } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  storeUser(form: UserI): Observable<any> {
    return this.http.post(this.url + '/register', form).pipe(
      catchError((error) => {
        return this.errorHandler(error)
      })
    );
  }

  errorHandler(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        Swal.fire({
          title: 'Ha ocurrido un error!!',
          text: 'Lo sentimos, no pudimos comunicarnos con el servidor 😞',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      } else {
        if(!error.error?.success) {
          Swal.fire({
            title: 'Ha ocurrido un error en el servidor!! 😞',
            html: JSON.stringify(error.error.errors),
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          return throwError(error);
        }
        Swal.fire({
          title: 'Ha ocurrido un error!!',
          text: 'Lo sentimos, ha ocurrido un error en el servidor. 😞',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    } else {
      Swal.fire({
        title: 'Ha ocurrido un error!!',
        text: 'Lo sentimos, ha ocurrido un error desconocido.😞',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
    return throwError(error);
  }
}

