import { map } from 'rxjs/operators';
import { AvailableResponse } from './response.model';
import { Router, Route } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { RequestData, CamundaData } from './request.model';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StatusValue } from './data.enum';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class DataService implements OnInit {

    private requestDataHere: RequestData;

    

    requestSentStatus = new BehaviorSubject (StatusValue.denied);

    availableResponse: AvailableResponse = {status: StatusValue.denied};

    constructor (private router: Router, private db: AngularFirestore,
        private http: HttpClient) {}

        configUrl = 'http://35.158.119.79:8080/engine-rest/process-definition/key/approve-form/start';

    ngOnInit() {

    }

   // tslint:disable-next-line:prefer-const
 

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


        // http://35.158.119.79:8080/engine-rest/process-definition/key/approve-form/start
        // this.http.post(this.configUrl);

        const variables = {
            firstName: {
                value: requestData.firstname,
                type: "String"
            },

            lastName: {
                value: requestData.lastname,
                type: "String"
            },

            emailAddress: {
                value: requestData.email,
                type: "String"
            },

            childrenCount: {
                value: requestData.below18.toString(),
                type: "Integer"
            },


            street: {
                value: requestData.street,
                type: "String"
            },

            city: {
                value: requestData.city,
                type: "String"
            },

            state: {
                value: requestData.state,
                type: "String"
            },

            postCode: {
                value: requestData.postcode.toString(),
                type: "Integer"
            },

            iban: {
                value: requestData.iban,
                type: "String"
            },

            incomeX: {
                value: requestData.incomeAgriculture.toString(),
                type: "Integer"
            },

            incomeY: {
                value: requestData.incomeCapitalAssets.toString(),
                type: "Integer"
            },

            incomeZ: {
                value: requestData.incomelettingAndLeasing.toString(),
                type: "Integer"
            },

            money: {
                value: '0',  // TODO need to be removed
                type: "Integer"
            },
        };



        const camundaData = {
            variables: variables,
            businessKey: 12345
            };

            console.log(this.configUrl, camundaData);

         this.http.post(this.configUrl, camundaData)
         .subscribe((response: Response) => {
                console.log('am in map');
              console.log('access permitted reporter says: ' + response);
              return response;
            });
            // .catch(error => { console.log(error);
            //     return Observable.throw(error);
            // });

         this.requestSentStatus.next(this.availableResponse.status);
         this.router.navigate(['/showresponce']);
    }

}

