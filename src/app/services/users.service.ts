import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { username } from '../interface/user';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<username[]> {
    return this.http.get<username[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    //   .pipe(tap((data) => JSON.stringify(data)));
    // .catch((error: any) => throwError(error));
  }
}
