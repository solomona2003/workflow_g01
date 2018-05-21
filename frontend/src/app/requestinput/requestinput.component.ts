import { DataService } from './data.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-requestinput',
  templateUrl: './requestinput.component.html',
  styleUrls: ['./requestinput.component.css']
})
export class RequestinputComponent implements OnInit {

  constructor(private dataService: DataService) { }
  formData: any;
  @ViewChild('ksv') avatar: ElementRef;
  ngOnInit() {
  }



  onSend(form: NgForm) {
    if (form.valid) {
    // this.formData = new FormData();
    // this.formData.append('ksv',
    //                 this.avatar.nativeElement.files[0],
    //                 // // this.avatar.nativeElement.files[0].ksv
    //               );

    this.dataService.sendData({
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      street: form.value.street,
      city: form.value.city,
      state: form.value.state,
      postcode: form.value.postcode,
      iban: form.value.iban,
      returnamount: form.value.returnamount,
      incomeX: form.value.incomeX,
      incomeY: form.value.incomeY,
      incomeZ: form.value.incomeZ,
      below18: form.value.below18,
      // ksv: this.formData,

    });

      }
    }
}
