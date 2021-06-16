import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  userDisplayName = 'name';
  isDisplayNameEditing = false;
  @ViewChild('displayName', { static: false })
  displayNameTxt: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onDisplayNameCancelEdit(): void {
    this.isDisplayNameEditing = false;
  }

  onDisplayNameEdit(): void {
    this.isDisplayNameEditing = true;
    this.displayNameTxt.nativeElement.value = this.userDisplayName;
  }

  onDisplayNameSave(): void {
    this.userDisplayName = this.displayNameTxt.nativeElement.value;
    this.isDisplayNameEditing = false;
  }
}
