import { UIService } from './../shared/ui-features.service';
import { ComplaintData } from './../makecomplaint/complain.model';
import { Observable, Subscription } from 'rxjs';
import { ComplaintService } from './../makecomplaint/complaint.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  postsCol: AngularFirestoreCollection<ComplaintData>;
  posts: Observable<ComplaintData[]>;
  killLoadingSubscription: Subscription;
  public isLoading = false;

  constructor(private complaintService: ComplaintService,
     private db: AngularFirestore, private uIService: UIService) { }
  hereResponse: any[];
  ngOnInit() {

    this.killLoadingSubscription = this.uIService.loadingStateChanged.subscribe(loading => {
      this.isLoading = loading;
    });
//   this.hereResponse =  this.complaintService.readComplaint();

// console.log('in admin' + this.complaintService.adminReadabale.text);
this.uIService.loadingStateChanged.next(true);
this.db.collection('complaint').snapshotChanges().subscribe(r => {

  
  this.uIService.loadingStateChanged.next(false);
});
this.postsCol = this.db.collection('complaint');

this.posts = this.postsCol.valueChanges();


console.log(this.postsCol.valueChanges.length);


  }

  onAccept() {}

  onDeny() {}



}
