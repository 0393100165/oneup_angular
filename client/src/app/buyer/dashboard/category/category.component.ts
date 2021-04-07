import { Component, OnInit } from '@angular/core';
import { MenuInfo } from '../../../core/interface/ec-template.interface'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  menuList: MenuInfo[] = [];
  constructor() { }

  ngOnInit(): void {
    // this.getMenuList();
  }

}
