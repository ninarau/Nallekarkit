import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private user: any = {};

  constructor() { }

  setUserinfo = (formValues: any) => {
    localStorage.setItem('user', JSON.stringify(formValues));
    console.log(formValues);
  };

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    }

}
