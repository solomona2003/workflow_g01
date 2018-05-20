import { AvailableResponse } from './response.model';
import { Router, Route } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { RequestData } from './request.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StatusValue } from './data.enum';
@Injectable()

export class DataService {

    private requestDataHere: RequestData;
    requestSentStatus = new BehaviorSubject (StatusValue.denied);

    availableResponse: AvailableResponse = {status: StatusValue.denied}

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

         this.requestSentStatus.next(this.availableResponse.status);
         this.router.navigate(['/showresponce']);
    }


}

