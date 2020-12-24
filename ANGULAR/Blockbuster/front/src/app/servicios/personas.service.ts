import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url: string = 'http://localhost:3003/api';

  constructor(private http:HttpClient) { }

  comprueboUser(user){
    return this.http.post(`${this.url}/user`, user);
  }

  nuevoUser(user){
    return this.http.post(`${this.url}/user/newUser`, user)
  }
}
