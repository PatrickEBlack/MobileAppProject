import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtserviceService {
  //results from getArtData will be returned in HttpClient format
  constructor(private hc: HttpClient) { }

  GetArtData():Observable<any>{
    //Service providing the first 12 pokemon in the pokedex for our list
    return this.hc.get('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');
  }
  
}
