import { Injectable } from '@angular/core';
import { User, createUser } from './user.model';
import { StoreConfig, Store } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user', resettable: true })
export class UserStore extends Store<User> {
  constructor() {
    super(createUser());
  }
}
