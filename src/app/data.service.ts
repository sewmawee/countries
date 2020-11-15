import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './countries.model';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    /*apiUrl = 'https://restcountries.eu/rest/v2/all';*/

    constructor(private http: HttpClient) { }


        
    getCountries() {
        return this.http.get("https://restcountries.eu/rest/v2/all");
    }
        
}   
