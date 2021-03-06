import { Component, OnInit } from '@angular/core';
import { DataService } from '../core-display/services/data.service';
import { ProductInfo } from '../core-display/interface/ec-template.interface';
@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  productList: ProductInfo[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.productList$.subscribe(data => {
      this.productList = data;
    });
  }
}
