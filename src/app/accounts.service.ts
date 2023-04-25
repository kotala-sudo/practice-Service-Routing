import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

import { Observable, of, BehaviorSubject } from 'rxjs';

export type Account = {
  name: string;
  status: string;
};

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  accounts: Account[] = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  accounts$: BehaviorSubject<Account[]>;

  constructor(private logService: LoggingService) {
    this.accounts$ = new BehaviorSubject<Account[]>(this.accounts);
  }

  getAccounts(): Observable<Account[]> {
    const accts = of(this.accounts);
    return accts;
  }

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.accounts$.next(this.accounts);

    this.logService.logStatusChange(status);
    console.log(this.accounts);
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.logService.logStatusChange(newStatus);
  }

  deleteAccount(id: number) {
    this.accounts.splice(id, 1);
  }
}
