import { AuthService } from './../auth/auth.service';
import { ComplaintData } from './complain.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ComplaintService } from './complaint.service';

@Component({
  selector: 'app-makecomplaint',
  templateUrl: './makecomplaint.component.html',
  styleUrls: ['./makecomplaint.component.css']
})
export class MakecomplaintComponent implements OnInit {
  @ViewChild('complaint') avatar: ElementRef;
  formData: any;
  constructor(private complaintService: ComplaintService, private authService: AuthService) { }

  ngOnInit() {
  }


  onComplain(form: NgForm) {
    // this.formData = new FormData();
    // this.formData.append('complaint',
    //                 this.avatar.nativeElement.files[0],
    //               );

    this.complaintService.sendComplaint({
      text: form.value.text,
      userEmail: this.authService.googleorfacebookAuthState.email,
      complaintStatus: "complained"
      });

  }
}
