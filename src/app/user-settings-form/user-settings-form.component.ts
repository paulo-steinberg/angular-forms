import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/IUserSettings.interface';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: IUserSettings = {
    name: 'Paulo',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  };
  
  userSettings: IUserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit() {
  }

}
