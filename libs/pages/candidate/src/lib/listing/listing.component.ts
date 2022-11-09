import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CandidateProfile } from '@rlrecrute/api-interfaces';

@Component({
  selector: 'rlrecrute-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  createOne() {
    this.http.get('/api/candidates/createOne');
    console.log('createOne');
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  candidates$ = this.http.get<CandidateProfile[]>('/api/candidates');
}
