import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
})
export class GameFormComponent implements OnInit {
  gameForm: FormGroup;
  datePipe: DatePipe;

  constructor(private formBuilder: FormBuilder) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({});
  }
}
