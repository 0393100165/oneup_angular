import { Component, OnInit } from '@angular/core';
import { DataService } from '../core-display/services/data.service';
import { MenuInfo } from '../core-display/interface/ec-template.interface';
import { from } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList: MenuInfo[];

  constructor(public dataService: DataService, public router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getMenuList();
  }

  getMenuList() {
    this.dataService.getMenuList().subscribe((data: MenuInfo[]) => {
      this.menuList = data;
    });
  }
  openNewTab() {
    // const url = this.router.serializeUrl(
    //   this.router.createUrlTree(['/seller'])
    // );
    // window.open(url, '_blank');
    this.router.navigate(['/seller']);
  }
  openNewTabLogin() {
    this.router.navigate(['/account/login']);
  }
  


}
