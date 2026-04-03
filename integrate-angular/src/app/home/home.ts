import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  title = 'Angular Electron';

  constructor() { }

  ngOnInit() { }
}
