import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITEM_TYPES } from 'src/app/shared/item/item.model';

@Component({
  selector: 'app-wish-form',
  templateUrl: './wish-form.component.html',
  styleUrls: ['./wish-form.component.scss'],
})
export class WishFormComponent implements OnInit {
  itemTypes = ITEM_TYPES;
  wishForm: FormGroup;

  @Input() wishItemType: number;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
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
}
