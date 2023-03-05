import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
//import { debug } from 'console';
import { ToastrService } from 'ngx-toastr';
import { Details } from '../../service';
import {DetailsClient} from '../../service'
import { DetailsFormComponent } from './details-form/details-form.component';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [],
  providers: [DetailsClient]  
})
export class DetailsComponent implements OnInit {


  list: Details[] = [];
  constructor(public service: DetailsClient,
    private toastr: ToastrService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    //this.service.refreshList();

    this.getDetailsAll();
  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");

    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }

  //populateForm(selectedRecord: any) {
  //  selectedRecord.dateOfBirth = formatDate(new Date(selectedRecord.dateOfBirth), 'yyyy-MM-dd', 'en_US')
  //}

  getDetailsAll() {
    this.service.getDetailsAll().subscribe(
      res => {
        this.list = res;
        //this.toastr.success('Record fetched');
      },

    );
  }


  onDelete(id: number) {
    true;
    if (confirm('Delete Record?')) {
      this.service.deleteDetails(id)
        .subscribe(
          res => {
            this.toastr.success("Record Deleted Successfully");
          },
          err => { console.log(err) }

        )
    }
  }
}
