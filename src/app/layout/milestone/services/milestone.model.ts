
export class Milestone {
    public  project:string;
    public  release:string;
    public  milestoneDesc:string;
    public  milestoneDate:Date;
    public  priority:number;
    public  dependency:string;
    public  notes:string;

  constructor(project:string, release:string,milestoneDesc:string,milestoneDate:Date,priority:number, dependency:string,notes:string) {
    
    this.project=project;
    this.release=release;
    this.milestoneDesc=milestoneDesc;
    this.milestoneDate=milestoneDate;
    this.priority=priority;
    this.dependency=dependency;
    this.notes=notes;
  }
}