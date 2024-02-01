import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-momentjs',
  templateUrl: './momentjs.component.html',
  styleUrls: ['./momentjs.component.css']
})
export class MomentjsComponent implements OnInit {

  @Input() startDate: string = "";
  @Input() endDate: string = "";
  dateRange: string[]=[];

  constructor() {
   
  }

  ngOnInit(): void {
    this.dateRange = this.calculateDateRange(this.startDate, this.endDate);
  }

  private calculateDateRange(startDate: string, endDate: string): string[] {
    const start = moment(startDate);
    const end = moment(endDate);
    const range: string[] = [];

    let currentDate = start.clone();

    while(currentDate.isSameOrBefore(end))
    {
      range.push(currentDate.format("MMMM-YYYY-Do-dddd"));
      currentDate.add(1,"days");
    }

    return range;
  }


}
