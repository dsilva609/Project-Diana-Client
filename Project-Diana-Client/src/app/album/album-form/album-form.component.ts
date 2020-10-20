import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss'],
})
export class AlbumFormComponent implements OnInit {
  albumForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.albumForm = this.formBuilder.group({
      artist: '',
      category: '',
      completionStatus: 0,
      countryOfOrigin: '',
      countryPurchased: '',
      datePurchased: '',
      discogsId: 0,
      genre: '',
      imageUrl: '',
      isNewPurchase: false,
      isPhysical: false,
      locationPurchased: '',
      mediaType: 0,
      notes: '',
      playCount: '',
      recordLabel: '',
      size: 0,
      speed: 0,
      style: '',
      title: '',
      yearReleased: 0,
    });
  }
}
