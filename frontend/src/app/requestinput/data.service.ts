import { Router, Route } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { RequestData } from './request.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StatusValue } from './data.enum';
@Injectable()

export class DataService {

    private requestDataHere: RequestData;
    requestSent = new BehaviorSubject (StatusValue.denied);

    constructor (private router: Router) {}

    sendData (requestData: RequestData) {
             this.requestDataHere = {
            firstname: requestData.firstname,
            lastname: requestData.lastname,
            email: requestData.email,
            address: requestData.address,
            city: requestData.city,
            state: requestData.state,
            postcode: requestData.postcode,
            iban: requestData.iban,
            returnamount: requestData.returnamount,
            income: requestData.income,
            ksv: requestData.ksv,
        };

        console.log(this.requestDataHere);
        this.requestSent.next(StatusValue.waiting);
    
         this.router.navigate(['/showresponce']);
    }

    // check() {

    // }
}

