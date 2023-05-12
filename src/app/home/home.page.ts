import { Component, OnInit } from '@angular/core';
import { ArtserviceService } from '../artservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private serv:ArtserviceService) {}

  //array myIndex to hold data
  myArt:any[]=[];

  ngOnInit(): void {
      this.serv.GetArtData().subscribe(
        (data)=>{console.log(data);
          //Assigns data to my myArt array
        this.myArt = data.results;
      });
  }
}
