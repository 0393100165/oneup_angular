import { Component, OnInit } from '@angular/core';
import { MenuInfo } from '../../../core/interface/ec-template.interface'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList: MenuInfo[];

  constructor(public dataService: DataService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMenuList();
  }
  getMenuList() {
    this.dataService.getMenuList().subscribe((data : MenuInfo[]) => {
      this.menuList = data;
      console.log(data);
    });
  }
  openNewTab() {
   const url = 'http://localhost:4200';
    window.open(url, '_blank');
  }

}
