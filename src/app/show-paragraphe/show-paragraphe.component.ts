import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-paragraphe',
  templateUrl: './show-paragraphe.component.html',
  styleUrls: ['./show-paragraphe.component.css']
})
export class ShowParagrapheComponent implements OnInit {

  isShown= true;
  constructor() { }

  ngOnInit(): void {
  }

  ShowHide(){
    this.isShown = !this.isShown;
  }
}
