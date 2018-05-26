import { UIService } from './../shared/ui-features.service';
import { AuthService } from './../auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { RequestData } from './request.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DataService } from './data.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-requestinput',
  templateUrl: './requestinput.component.html',
  styleUrls: ['./requestinput.component.css']
})
export class RequestinputComponent implements OnInit {
  message: string;
  alreadySent = false;
  postsCol: AngularFirestoreCollection<RequestData>;
  posts: Observable<RequestData[]>;
  constructor(private dataService: DataService,
     private uIService: UIService ,  private db: AngularFirestore, private authService: AuthService) { }
  killLoadingSubscription: Subscription;
  public isLoading = false;
  formData: any;
  @ViewChild('ksv') avatar: ElementRef;
  ngOnInit() {

    this.killLoadingSubscription = this.uIService.loadingStateChanged.subscribe(loading => {
      this.isLoading = loading;
    });


    this.postsCol = this.db.collection('inputData', ref => ref.where('email', '==', this.authService.googleorfacebookAuthState.email));

    
    // Create a query against the collection.
    this.posts = this.postsCol.valueChanges();
    this.uIService.loadingStateChanged.next(true);
    this.posts.subscribe(r => {
      this.uIService.loadingStateChanged.next(false);
      if (r.length > 0) {
      this.alreadySent = true;
        this.message = 'You have already sent your data!!';
        
      }
    });
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
      street: "abc@abc.com",
      city: form.value.city,
      state: form.value.state,
      postcode: form.value.postcode,
      iban: form.value.iban,
      incomeAgriculture: form.value.incomeAgriculture,
      incomeSelfEmployment: form.value.incomeSelfEmployment,
      incomeCapitalAssets: form.value.incomeCapitalAssets,
      incomelettingAndLeasing: form.value.incomelettingAndLeasing,
      below18: form.value.below18,
      status: 1,

    });

      }
    }
}
