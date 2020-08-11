import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() width = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
