import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wish-form',
  templateUrl: './wish-form.component.html',
  styleUrls: ['./wish-form.component.scss'],
})
export class WishFormComponent implements OnInit {
  itemTypes: { name: string; value: number }[];
  wishForm: FormGroup;

  @Input() wishItemType: number;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.itemTypes = this.getItemTypes();

    this.wishForm = this.formBuilder.group({
      apiID: '',
      category: '',
      imageUrl: '',
      itemType: 0,
      notes: '',
      owned: false,
      title: '',
      wishID: 0,
    });
  }

  getItemTypes(): { name: string; value: number }[] {
    return [
      { name: 'Album', value: 0 },
      { name: 'Book', value: 1 },
      { name: 'Game', value: 3 },
      { name: 'Movie', value: 2 },
    ];
  }
}
