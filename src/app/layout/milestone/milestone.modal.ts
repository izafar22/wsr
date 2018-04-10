import { ProjectmenuService } from './../navigation/services/projectmenu.service';
import { Milestone } from './services/milestone.model';
import { MilestoneDataService } from './services/milestone-data.service';
import {Component,ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './milestone.modal.html'
})
export class NgbdModalBasic {
  closeResult: string;
  mycontent:any;

  constructor(private modalService: NgbModal,private milestoneDataService :MilestoneDataService) {}

  open(content) {
    this.mycontent=content;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onSubmit(form :NgForm){
    let milestone =new Milestone(
     form.value.project
    ,form.value.release
    ,form.value.milestoneDesc
    ,form.value.milestoneDate
    ,form.value.priority
    ,form.value.dependency
    ,form.value.notes);

    this.milestoneDataService.addMilestone(milestone);
    console.log("submitted :"+milestone);
 

  }
}