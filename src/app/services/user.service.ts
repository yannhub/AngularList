import { Injectable } from '@angular/core';
import { User } from '../models/user';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor() {
    this.users = Array(100)
      .fill(1)
      .map(_ => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.random.number({ min: 16, max: 105 }),
        jobTitle: faker.name.jobTitle(),
        address: {
          city: faker.address.city(),
          state: faker.address.state()
        },
        avatar: faker.image.avatar()
      }));
  }

  getUsers(): User[] {
    return this.users;
  }
}
