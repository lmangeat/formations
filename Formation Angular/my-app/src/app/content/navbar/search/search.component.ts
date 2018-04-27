import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchService } from '../../core/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup
  searchField: FormControl

  constructor(private SearchService: SearchService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField
        .valueChanges
        .subscribe((searchString: string) => {
          this.SearchService.searchUser.next(searchString);
        });
    this.searchForm = new FormGroup({
      search: this.searchField
    });
  }

}
