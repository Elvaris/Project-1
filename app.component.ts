import { Component } from '@angular/core';
import { ApiService } from './services/flicker-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Fix the property name to 'styleUrls'
})
export class AppComponent {
  title = 'filckrfeed';
  page = 1;
  isLoading = false;
  images: any;
  searchTerm: string = '';
  photos: any;
  responseData: any;

  constructor(private flickerService:ApiService) { }

  ngOnInit() {
    this.flickerService.getImages(1).subscribe((data)=>{
      console.log(data);
      this.photos = data.photos.photo
      for(let image of this.photos){
        image.src = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
      }
      console.log(this.photos);
      
    })    
  }
}
