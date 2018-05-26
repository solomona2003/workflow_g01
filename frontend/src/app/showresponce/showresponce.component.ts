import { ComplaintData } from './../makecomplaint/complain.model';
import { element } from 'protractor';
import { AuthService } from './../auth/auth.service';
import { RequestData } from './../requestinput/request.model';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { DataService } from './../requestinput/data.service';
import { Subscription, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-showresponce',
  templateUrl: './showresponce.component.html',
  styleUrls: ['./showresponce.component.css']
})
export class ShowresponceComponent implements OnInit, OnDestroy {

  postsCol: AngularFirestoreCollection<RequestData>;
  posts: Observable<RequestData[]>;

  postsCol1: AngularFirestoreCollection<ComplaintData>;
  posts1: Observable<ComplaintData[]>;

  complaintisempty = false;
  inputdataisempty =false;

status: any;
  sentDataStatus: number;
  complaintStatus: string;
  killsentDataSubscription: Subscription;

  constructor(private dataService: DataService, private db: AngularFirestore, private authService: AuthService) { }

  ngOnInit() {
    this.sentDataStatus = this.dataService.requestSentStatus.getValue(); // from the BehaviorSubject
    this.killsentDataSubscription = this.dataService.requestSentStatus.subscribe(sentStatus => {

      this.sentDataStatus =  sentStatus;
    });



// for inputData

// ======================================================
    // Create a reference to the cities collection
 this.postsCol = this.db.collection('inputData', ref => ref.where('email', '==', this.authService.googleorfacebookAuthState.email));
// Create a query against the collection.
this.posts = this.postsCol.valueChanges();

this.posts.subscribe(r => {
  if(r.length !==0 ){ 
this.sentDataStatus = r.pop().status;} else {this.inputdataisempty = true;}
});

  // ==========================================================

  // for complaint

// ======================================================
    // Create a reference to the cities collection
 this.postsCol1 = this.db.collection('complaint', ref => ref.where('email', '==', this.authService.googleorfacebookAuthState.email));
 // Create a query against the collection.
 this.posts1 = this.postsCol1.valueChanges();
 
 this.posts1.subscribe(r => {
   if(r.length !== 0) { 
 this.complaintStatus = r.pop().status;} else { this.complaintisempty = true;}
 });
 
   // ==========================================================
  }






  ngOnDestroy(): void {
    this.killsentDataSubscription.unsubscribe();
  }

}
