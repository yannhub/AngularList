import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';
  private users: BehaviorSubject<User[]> = new BehaviorSubject([]);
  public readonly users$: Observable<User[]> = this.users.asObservable();

  constructor(private http: HttpClient) {
    this.getUsers().subscribe(users => this.users.next(users));
  }

  private getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  searchUsers(term: string): Observable<User[]> {
    term = term.trim().toLowerCase();
    const o = this.getUsers().pipe(
      map(users =>
        users.filter(u => {
          const aggregat = [
            u.firstName,
            u.lastName,
            u.jobTitle,
            u.address.city,
            u.address.state,
            u.age
          ].join('&-&');
          return aggregat.toLowerCase().indexOf(term) !== -1 || !term;
        })
      )
    );
    o.subscribe(users => {
      console.log(term);
      this.users.next(users);
    });
    return o;
  }
}
