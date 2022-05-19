import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'FSD Tutorial Demo';
  isavailable=false;
  name='Your Name'
  months=['january','february','march','april','may','june','july','august','september','october','november','december']

  buttonclick(){
    alert('button is clicked');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
