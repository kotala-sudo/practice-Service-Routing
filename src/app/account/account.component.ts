import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  // @Input() account: { name: string; status: string };

  accounts: { name: string; status: string }[] = [];

  accountSubscription?: Subscription;

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accountsService
      .getAccounts()
      .subscribe(
        (data: { name: string; status: string }[]) => (this.accounts = data)
      );
  }

  onSetTo(id: number, status: string) {
    this.accountsService.updateStatus(id, status);
    // console.log(`A status change occured, the new status is ${status}`);
    // this.logService.logStatusChange(status);
  }

  removeAccount(id: number) {
    this.accountsService.deleteAccount(id);
  }
}
