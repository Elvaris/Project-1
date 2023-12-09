import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../services/flicker-services.service'; 

@Component({
  selector: 'app-photo-service',
  templateUrl: './photo-service.component.html',
  styleUrls: ['./photo-service.component.scss']
})
export class PhotoServiceComponent implements OnInit {
getImageUrl(_t3: any) {
throw new Error('Method not implemented.');
}
  images: any[] = [];
  page = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.apiService.getImages(this.page).subscribe(
      (data) => {
        console.log(data)
        this.images = this.images.concat(data.photos.photo);
        this.page++;
      },
      (error) => {
        console.error('Error loading images', error);
      }
    );
  }
  

  @HostListener('window:scroll', ['$event'])


onScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    this.loadImages();
  }}}
