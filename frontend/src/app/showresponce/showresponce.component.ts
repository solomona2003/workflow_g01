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
    this.killsentDataSubscription = this.dataService.requestSent.subscribe(sentStatus => {
      this.sentDataStatus =  sentStatus;
    });
  }


  ngOnDestroy(): void {
    this.killsentDataSubscription.unsubscribe();
  }

}
