import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  getMovieDetailResult: any  ;
  getMovieVideoResult:  any  ;
  getMovieCastResult:  any ;

  constructor(
    private movie: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let getParamId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
  
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id:any){
    this.movie.getMovieDetails(id).subscribe((result)=>{
        console.log(result,'getmoviedetails#');
        this.getMovieDetailResult =  result;

    });
  }

  getVideo(id:any)
  {
    this.movie.getMovieVideo(id).subscribe((result)=>{
        console.log(result,'getMovieVideo#');
        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getMovieVideoResult = element.key;
            }
        });

    });
  }

  getMovieCast(id:any)
  {
    this.movie.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }
}
