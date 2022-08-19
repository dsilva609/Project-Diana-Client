import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ITEM_TYPES } from 'src/app/shared/item/item.model';

@Component({
  selector: 'app-wish-form',
  templateUrl: './wish-form.component.html',
  styleUrls: ['./wish-form.component.scss'],
})
export class WishFormComponent implements OnInit {
  itemTypes = ITEM_TYPES;
  wishForm: UntypedFormGroup;

  @Input() wishItemType: number;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.wishForm = this.formBuilder.group({
      apiId: '',
      category: '',
      imageUrl: '',
      isOwned: false,
      itemType: 0,
      notes: '',
      title: '',
      wishId: 0,
    });
  }
}
