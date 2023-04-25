import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  constructor() {}

  logStatusChange(newStatus: string) {
    console.log(`A status changed occured, the new status is ${newStatus}`);
  }
}
