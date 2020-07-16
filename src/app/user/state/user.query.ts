import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<User> {
  constructor(protected store: UserStore) {
    super(store);
  }
}
