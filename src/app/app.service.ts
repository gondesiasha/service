import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class movieService {
  private data:string ='http://localhost:9000/api/movies';
  constructor(private http:HttpClient) { }
  getmovies(): Observable<any>
  { 
    return this.http.get<any> (this.data);
  }
}
