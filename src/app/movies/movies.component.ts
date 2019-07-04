import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { movieService} from '../app.service';
import { HttpClient } from '@angular/common/http';

 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
theatre;
 constructor(private service:movieService,
  private http:HttpClient) { }
  movies=[];

 @Output() public arr = new  EventEmitter ;
postList(id)
{
 console.log(id);
this.http.post('http://localhost:9000/api/theatres', id)
.subscribe((res) => {
  this.theatre = res;
  this.arr.emit(this.theatre);
  //console.log(this.theatre);
  // console.log(this.theatre)
}, error => {
  console.log(error);
});
}



  ngOnInit() {

    this.service.getmovies().subscribe(data1 =>this.movies=data1);
  }

}
