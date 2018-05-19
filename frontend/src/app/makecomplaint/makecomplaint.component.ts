// import { ComplaintService } from './complaint.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-makecomplaint',
  templateUrl: './makecomplaint.component.html',
  styleUrls: ['./makecomplaint.component.css']
})
export class MakecomplaintComponent implements OnInit {
  // @ViewChild('ksv') avatar: ElementRef;
  // formData: any;
  // constructor(private complaintService: ComplaintService) { }

  ngOnInit() {
  }


  // onComplain(form: NgForm) {
  //   this.formData = new FormData();
  //   this.formData.append('complaint',
  //                   this.avatar.nativeElement.files[0],
  //                   // this.avatar.nativeElement.files[0].ksv
  //                 );

  //   this.complaintService.sendComplaint({
  //     complainttext: form.value.complainttext,
  //     file: form.value.file });

  // }
}
