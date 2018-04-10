import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SharedService {
   //private caseNumber: any;

    // Observable string sources
  private id = new Subject<string>();  

  // Observable string streams
  id$ = this.id.asObservable();

    // Service message commands
  publishData(data: string) {
    this.id.next(data);
  }
  constructor() { }

}
