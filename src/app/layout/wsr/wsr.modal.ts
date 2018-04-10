import { ProjectmenuService } from './../navigation/services/projectmenu.service';
//import { Milestone } from './services/milestone.model';
//import { MilestoneDataService } from './services/milestone-data.service';
import {Component,ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'ngbd-modal-wsr',
  templateUrl: './wsr.modal.html'
})
export class NgbdModalWsr implements OnInit {
  closeResult: string;
  mycontent:any;
  wsrForm:FormGroup;

  constructor(private modalService: NgbModal, private fb:FormBuilder) {}

  ngOnInit() {
    this.wsrForm = this.fb.group({
      name: [''],
      address: this.fb.group({ // create nested formgroup to pass to child
        street: [''],
        zip: ['']
      })
    })
  }

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
    

    // this.milestoneDataService.addMilestone(milestone);
    // console.log("submitted :"+milestone);
 

  }
}