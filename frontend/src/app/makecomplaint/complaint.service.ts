import { element } from 'protractor';
import { DataService } from './../requestinput/data.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Route } from '@angular/router';
import { ComplaintData } from './complain.model';
import { Injectable } from '@angular/core';
import { StatusValue } from '../requestinput/data.enum';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

@Injectable()
export class ComplaintService {

    adminReadabale: ComplaintData[];
    // complaintStatusChanged = new Subject<ComplaintStatus[]> ();
    private complaintDataHere: ComplaintData;
    constructor (private router: Router, private dataService: DataService, private db: AngularFirestore) {}

    sendComplaint(complaintData: ComplaintData) {
        this.complaintDataHere = {

            text: complaintData.text,
            email: complaintData.email,
            status: "complained"


        };
        console.log('am in send data of complaint service' );

        this.db.collection("complaint").doc(this.complaintDataHere.email).set(this.complaintDataHere);

        // this.db.collection('complaint').add(this.complaintDataHere);

        this.dataService.requestSentStatus.next(StatusValue.waiting);
        this.router.navigate(['/showresponce']);
    }


}
