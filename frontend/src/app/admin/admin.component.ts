import { AuthService } from './../auth/auth.service';
import { UIService } from './../shared/ui-features.service';
import { ComplaintData } from './../makecomplaint/complain.model';
import { Observable, Subscription } from 'rxjs';
import { ComplaintService } from './../makecomplaint/complaint.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  postsCol: AngularFirestoreCollection<ComplaintData>;
  posts: Observable<ComplaintData[]>;

  complaintisempty = false;
  killLoadingSubscription: Subscription;
  public isLoading = false;
  count=0;

  constructor(private complaintService: ComplaintService,
     private db: AngularFirestore, private uIService: UIService, 
    private authService: AuthService) { }
  hereResponse: any[];
  thetext: string;
  thestatus: string;
  ngOnInit() {

    this.killLoadingSubscription = this.uIService.loadingStateChanged.subscribe(loading => {
      this.isLoading = loading;




      // this.postsCol = this.db.collection('complaint');
      // // Create a query against the collection.
      // this.posts = this.postsCol.valueChanges();
      // this.posts.subscribe(r => {
      //   if (r.length !== 0)
      //    { r.forEach(item => {
      //      if (item.status === 'complained-accepted' || item.status === 'complained-denied' )
      //      { this.count++; }} ); if (this.count === r.length) {this.complaintisempty = true; }} 
      //      else { this.complaintisempty = true; }
      // });


    });
//   this.hereResponse =  this.complaintService.readComplaint();

// console.log('in admin' + this.complaintService.adminReadabale.text);
this.uIService.loadingStateChanged.next(true);
this.db.collection('complaint').snapshotChanges().subscribe(r => {

  
  this.uIService.loadingStateChanged.next(false);
});
this.postsCol = this.db.collection('complaint');

this.posts = this.postsCol.valueChanges();

 this.posts.subscribe(r => {
  this.thetext = r.pop().text;
  this.thestatus = r.pop().status;
});

console.log(this.postsCol.valueChanges.length);


  }

  ngOnDestroy() {
    this.killLoadingSubscription.unsubscribe();
  }

  // this.postsCol1 = this.db.collection('complaint', ref => ref.where('email', '==', this.authService.googleorfacebookAuthState.email));


  // this.db.collection('inputData').add(this.requestDataHere);

  onAccept(emailhere: string) {

    this.db.collection("complaint").doc(emailhere).set({email: emailhere, status: 'complained-accepted', text: this.thetext });
  }

  onDeny(emailhere) {
    this.db.collection("complaint").doc(emailhere).set({email: emailhere, status: 'complained-denied', text: this.thetext });
  }






}
