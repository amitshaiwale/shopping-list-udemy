import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  loadedFeature:string = 'recipe';
  onNavigate(e: string){
    this.loadedFeature = e;
  }
}
