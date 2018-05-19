import { Router, Route } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { RequestData } from './request.model';
import { Injectable } from '@angular/core';
@Injectable()

export class DataService {

    private requestDataHere: RequestData;
    requestSent = new Subject <number>();

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
         this.requestSent.next(2);
         this.router.navigate(['/showresponce']);
    }
}

