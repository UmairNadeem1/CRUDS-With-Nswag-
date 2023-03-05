import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DetailsClient } from '../../../service';
import { Details } from '../../../service'
//import { DetailsService } from '../../shared/details.service';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styles: []
})
export class DetailsFormComponent implements OnInit {
  //formData: any;
  formData = new Details;
  details: Details = new Details();
  id: any;


  constructor(public service: DetailsClient,
    private toastr: ToastrService) {
  }
   

  ngOnInit() {
     
    //if (this.service.formData.Detailsid == 0)
    //  //this.insertRecord(form);
    //  "";
    //else
    //  //this.updateRecord(form);
    //  "";
  } 

  onSubmit() {
    if (!this.formData.detailsid || this.formData.detailsid == 0) {
      this.formData.detailsid = 0;
      this.insertRecord(this.formData);
    }
    else {
      this.updateRecord(this.id, this.details);
      this.formData.detailsid = 0;
    }
     
  }

  insertRecord(details: Details) {
    this.service.postDetails(details).subscribe(
      res => {
       // this.service.refreshList();
       // this.toastr.success('Successfully Submitted');
      },
      err => {
        console.log(err);   
      //  this.toastr.error('Error');
      }
      
    );
  }

  updateRecord(id:number, details:Details) {
    this.service.putDetails(id, this.details).subscribe(
      res => {
        //this.service.refreshList();
        this.toastr.info('Successfully Updated');
      },
      err => {
        console.log(err);
        this.toastr.error('Error');
      }
    );
  }

}

