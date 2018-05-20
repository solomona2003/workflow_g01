import { DataService } from './../requestinput/data.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-showresponce',
  templateUrl: './showresponce.component.html',
  styleUrls: ['./showresponce.component.css']
})
export class ShowresponceComponent implements OnInit, OnDestroy {

  sentDataStatus: number;
  killsentDataSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.sentDataStatus = this.dataService.requestSentStatus.getValue(); // from the BehaviorSubject
    this.killsentDataSubscription = this.dataService.requestSentStatus.subscribe(sentStatus => {

      this.sentDataStatus =  sentStatus;
    });
  }


  ngOnDestroy(): void {
    this.killsentDataSubscription.unsubscribe();
  }

}
