import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers:[SharedService]
})
export class ContentComponent implements OnInit {
id:number;
 constructor(private route: ActivatedRoute) { 
  // this.sharedService.id$.subscribe(
  //           data => {
             
  //               console.log('content : ' + data);
               
               
  //           });
  }

  ngOnInit() {
     this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

}
