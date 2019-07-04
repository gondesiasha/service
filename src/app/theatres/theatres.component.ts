import { Component, OnInit,Input } from '@angular/core';
import { movieService} from '../app.service';
import { HttpClient } from '@angular/common/http';
import { MoviesComponent } from '../movies/movies.component';


@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.scss']
})
export class TheatresComponent{


  // constructor(private service:movieService) { }
  constructor(private http:HttpClient){ }
 // theatre:any;
 // theatres=[];

 


  // ngOnInit() {

  //   this.service.postList("").subscribe(data1 =>this.theatres=data1);
  // }




  @Input() arr1;

}
