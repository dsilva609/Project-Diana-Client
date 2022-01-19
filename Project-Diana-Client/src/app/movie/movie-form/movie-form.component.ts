import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;
  datePipe: DatePipe;

  constructor(private formBuilder: FormBuilder) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({});
  }
}
