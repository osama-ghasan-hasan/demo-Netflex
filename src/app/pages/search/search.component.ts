import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  searchResult:any = [];

  constructor(private movie: MovieService) {}

  ngOnInit() {}

  submitForm()
  {
      // console.log(this.searchForm.value,'searchform#');
      this.movie.getSearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie##');
          this.searchResult = result.results;
      });
  }
}
