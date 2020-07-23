import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { User } from 'src/app/user/state/user.model';
import { UserStore } from 'src/app/user/state/user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<User> {
  constructor(protected store: UserStore) {
    super(store);
  }
}
