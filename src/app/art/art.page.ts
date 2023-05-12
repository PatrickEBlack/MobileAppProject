import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Browser} from '@capacitor/browser';
import { ArtserviceService } from '../artservice.service';


@Component({
  selector: 'app-art',
  templateUrl: './art.page.html',
  styleUrls: ['./art.page.scss'],
})
export class ArtPage implements OnInit {

  constructor(private hc: HttpClient, private serv: ArtserviceService) { }
  myArt:any[]=[];
  ngOnInit():void {
    this.serv.GetArtData().subscribe(
      (data)=>{console.log(data);
      this.myArt = data.results;
    });
  }

  //openArtPage method is used to open the httpLink provided while filling in name at the end of the url--
  //--to direct the user to the webpage corresponding to their selected pokemon
  async openArtPage(name:string){
    //Link to an index containing all pokemon and their data
    await Browser.open({url: 'https://pokemon.gameinfo.io/en/pokemon/'+name})
  }
  
}

