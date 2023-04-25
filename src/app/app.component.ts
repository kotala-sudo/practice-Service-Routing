import { Component, OnInit } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountsService],
})
export class AppComponent {
  // accounts: { name: string; status: string }[] = [];
  // constructor(private accountsServices: AccountsService) {}
  // ngOnInit() {
  //   this.accounts = this.accountsServices.accounts;
  // }

  constructor(private acctService: AccountsService) {}
}
