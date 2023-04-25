import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';
import { AccountsService } from './accounts.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/accounts', pathMatch: 'full' },
      { path: 'accounts', component: AccountComponent },
      { path: 'newaccount', component: NewAccountComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AccountComponent,
    NewAccountComponent,
  ],
  bootstrap: [AppComponent],
  providers: [LoggingService],
})
export class AppModule {}
