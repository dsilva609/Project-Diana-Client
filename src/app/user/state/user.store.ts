import { createUser, User } from 'src/app/user/state/user.model';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user', resettable: true })
export class UserStore extends Store<User> {
  constructor() {
    super(createUser());
  }
}
