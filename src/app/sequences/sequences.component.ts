import { Component, OnInit } from '@angular/core';

import { sequences } from '../sequences';

@Component({
  selector: 'app-sequences',
  templateUrl: './sequences.component.html',
  styleUrls: ['./sequences.component.css']
})
export class SequencesComponent implements OnInit {
  sequences = sequences;
  constructor() { }

  ngOnInit(): void {
  }

}
