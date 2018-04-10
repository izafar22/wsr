import { Component, OnInit, Output, EventEmitter, NgModule } from '@angular/core';
import {ProjectmenuService} from './services/projectmenu.service';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers:[ProjectmenuService,SharedService]
})
export class NavigationComponent implements OnInit {
 id:number;
 projectMenuList:{id:number,name:string}[]=[];


  constructor(private projectMenuService:ProjectmenuService,private sharedService: SharedService) { 
  this.sharedService.id$.subscribe(
            data => {
             
                console.log('navigation-received from content: ' + data);
               
               
            });
  }

  ngOnInit() {
    this.projectMenuList = this.projectMenuService.projectMenuList;
  }
   onProjectSelection(event:Event){
  console.log("project id : "+event);
    // this.sharedService.publishData(event.target);
       
}
}
