import { Milestone } from './services/milestone.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {MilestoneDataService} from './services/milestone-data.service';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css'],
  providers:[MilestoneDataService]
})
export class MilestoneComponent implements OnInit {
id:number;
milestoneList:Milestone[];
  constructor(private route: ActivatedRoute,private milestoneDataService :MilestoneDataService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );

    //  this.milestoneDataService.subscribe(
    //     (milestoneList: Milestone[]) => {
    //       this.milestoneList = milestoneList;
    //     }
    //   );

      this.milestoneList=this.milestoneDataService.milestoneList;
      console.log(this.milestoneList);
  }

}
