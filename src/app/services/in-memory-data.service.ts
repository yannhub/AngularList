import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = Array(10000)
      .fill(1)
      .map(_ => ({
        id: faker.random.uuid(),
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
    return { users: users as User[] };
  }

  genId(users: User[]): string {
    return faker.random.uuid();
  }
}
