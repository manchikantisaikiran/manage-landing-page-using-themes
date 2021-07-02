import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-response-card',
  templateUrl: './response-card.component.html',
  styleUrls: ['./response-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResponseCardComponent implements OnInit {

  @Input() name = '';
  @Input() message = '';
  @Input() image = '';

  constructor() { }

  ngOnInit(): void {
  }

}
