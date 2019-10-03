import { Injectable } from '@angular/core';
import { User } from '../models/user';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor() {
    faker.locale = 'fr';

    this.users = Array(100)
      .fill(1)
      .map(_ => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        city: faker.address.city(),
        avatar: faker.image.avatar()
      }));
  }

  getUsers(): User[] {
    return this.users;
  }
}
