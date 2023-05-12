import { Component, OnInit } from '@angular/core';
import { ArtserviceService } from './artservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  //myArt array 
  myArt:any[]=[];

  constructor(private serv:ArtserviceService) {}
  ngOnInit(): void {
      this.serv.GetArtData().subscribe(
        //data will be stored in the myArt array after it's been retrieved
        (data)=>{console.log(data);
        this.myArt = data.results;
      });
  }


}
