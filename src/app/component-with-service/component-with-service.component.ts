import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-component-with-service',
  templateUrl: './component-with-service.component.html',
  styleUrls: ['./component-with-service.component.css']
})
export class ComponentWithServiceComponent implements OnInit {
  data: string[];
  constructor(public myServiceService: MyService) { }

  ngOnInit() {
    this.myServiceService.getData().subscribe(data => {
      this.data = data;
    });
  }

}
