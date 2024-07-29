import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamic-images',
  templateUrl: './dinamic-images.component.html',
  styleUrls: ['./dinamic-images.component.css']
})
export class DinamicImagesComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
  }

  src:string = 'https://images.pexels.com/photos/7123348/pexels-photo-7123348.jpeg?auto=compress&cs=tinysrgb&w=600'
  img1:string = 'https://images.pexels.com/photos/3225511/pexels-photo-3225511.jpeg?auto=compress&cs=tinysrgb&w=600'
  img2:string = 'https://images.pexels.com/photos/4700113/pexels-photo-4700113.jpeg?auto=compress&cs=tinysrgb&w=600'

  initialImage() {
    this.src = 'https://images.pexels.com/photos/7123348/pexels-photo-7123348.jpeg?auto=compress&cs=tinysrgb&w=600';
  }
}
