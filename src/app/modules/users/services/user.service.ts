import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://127.0.0.1:8000/api/'

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): void {
    const url = 'http://104.131.86.8/tecnicos/public/api/usuarios?api_key=bn4pgas3ku2yeicjfmv507wtxz6ohl9qdr81';
    const url1 = 'https://coysa.herokuapp.com/api/gastos?api_token=AFF8tI4L4iK1i6exDkExHINKi3RqlrAg9f4sFzsuDwWL4mfMw7hsowmxSDiaCFhKmFpkpxnFgBhWef2V&user_id=1&mes=null'
    this.http.get(url)
      .subscribe(data => console.log(data))
  }

  storeUser(form: UserI): Observable<any> {
    let direccion = this.url + 'users';
    return this.http.post(direccion, form);
  }
}

