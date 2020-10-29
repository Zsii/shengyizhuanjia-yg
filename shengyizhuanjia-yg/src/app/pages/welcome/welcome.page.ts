import { LocalStorageService } from './../../shared/local-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  showSkip = true;
  @ViewChild('slides', {static: true}) slides: IonSlides;
  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
    const appConfig = this.localStorageService.get('App', {
      launched: false,
      version: '1.0.0'
    });
    if (appConfig.launched === true){
      this.router.navigateByUrl('/folder/hello');
    }else{
      appConfig.launched = true;
      this.localStorageService.set('App', appConfig);
    }
  }

  onSlideWillChange(){
    this.slides.isEnd().then((end) => {
      this.showSkip = !end;
    });
  }
}
