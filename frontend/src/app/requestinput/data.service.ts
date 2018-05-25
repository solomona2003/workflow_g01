import { AvailableResponse } from './response.model';
import { Router, Route } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { RequestData } from './request.model';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StatusValue } from './data.enum';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable()

export class DataService implements OnInit {

    private requestDataHere: RequestData;
    requestSentStatus = new BehaviorSubject (StatusValue.denied);

    availableResponse: AvailableResponse = {status: StatusValue.denied};

    constructor (private router: Router, private db: AngularFirestore) {}

    ngOnInit() {

    }

    sendData (requestData: RequestData) {
             this.requestDataHere = {

            firstname: requestData.firstname,
            lastname: requestData.lastname,
            email: requestData.email,
            street: requestData.street,
            city: requestData.city,
            state: requestData.state,
            postcode: requestData.postcode,
            iban: requestData.iban,
            incomeAgriculture: requestData.incomeAgriculture,
            incomeSelfEmployment: requestData.incomeSelfEmployment,
            incomeCapitalAssets: requestData.incomeCapitalAssets,
            incomelettingAndLeasing: requestData.incomelettingAndLeasing,
            below18: requestData.below18,
            status: 'waiting',

        };


        this.db.collection('inputData').add(this.requestDataHere);

         this.requestSentStatus.next(this.availableResponse.status);
         this.router.navigate(['/showresponce']);
    }

}

