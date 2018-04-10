import { Milestone } from './milestone.model';
import { Injectable } from '@angular/core';


@Injectable()
export class MilestoneDataService {
milestoneList = [
  {
    project:'123',
    release:'August',
    milestoneDesc:'test',
    milestoneDate:new Date(12-3-2014),
    priority:1,
    dependency:'none',
    notes:'test'
  },
  {
     project:'124',
    release:'August1',
    milestoneDesc:'test1',
    milestoneDate:new Date(12-3-2014),
    priority:1,
    dependency:'none1',
    notes:'test1'
  },
  {
     project:'125',
    release:'August3',
    milestoneDesc:'test1',
    milestoneDate:new Date(12-3-2014),
    priority:3,
    dependency:'none1',
    notes:'test4'
  }
];
  constructor() { }

  addMilestone(milestone: Milestone) {
    this.milestoneList.push(milestone);
  
  }
}
