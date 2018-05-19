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
    console.log("aasdasd");
    this.sentDataStatus = this.dataService.requestSent.getValue();
    this.killsentDataSubscription = this.dataService.requestSent.subscribe(sentStatus => {
      console.log("in between");
      
      this.sentDataStatus =  sentStatus;
    });
  }


  ngOnDestroy(): void {
    this.killsentDataSubscription.unsubscribe();
  }

}
