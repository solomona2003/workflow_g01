import { DataService } from './../requestinput/data.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Route } from '@angular/router';
import { ComplaintData } from './complain.model';
import { Injectable } from '@angular/core';
import { StatusValue } from '../requestinput/data.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ComplaintService {

    private complaintDataHere: ComplaintData;
    constructor (private router: Router, private dataService: DataService) {}

    sendComplaint(complaintData: ComplaintData) {
        this.complaintDataHere = {
            complainttext: complaintData.complainttext,
            file: complaintData.file
        };

        this.dataService.requestSentStatus.next(StatusValue.waiting);
        this.router.navigate(['/showresponce']);
    }

}
