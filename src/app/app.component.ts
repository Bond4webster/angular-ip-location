import { Component,OnInit,Input } from '@angular/core';

import { VisitorsService } from './services/visitors.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit   {
  @Input() ipaddress: string = '';

  latitude:string= '';
  longitude:string= '';
  continent_name:string = '';
  country_name:string = '';
  country_flag:string= '';
  city:string = '';
  type:string ='';
  constructor(
    private visitorsService:VisitorsService
  ){

  }

  ngOnInit(){

    this.visitorsService.getIpAddress().subscribe(res => {

       // @ts-ignore
      this.ipaddress = res['ip'];
      this.visitorsService.getGEOLocation(this.ipaddress).subscribe(res => {
        // @ts-ignore
        this.latitude = res['latitude'];  /*Math.round((7.114)*100)/100*/
         // @ts-ignore
        this.longitude = res['longitude'];
         // @ts-ignore
        this.continent_name = res['continent_name'];
         // @ts-ignore
        this.country_name = res['country_name'];
         // @ts-ignore
        this.country_flag = res.location['country_flag'];
         // @ts-ignore
        this.city = res['city'];
         // @ts-ignore
        this.type = res['type'];
        console.log(res);
      });

    });
  }
}
