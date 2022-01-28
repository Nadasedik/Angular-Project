import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/StoreData';

@Component({
  selector: 'app-MainPage',
  templateUrl: './MainPage.component.html',
  styleUrls: ['./MainPage.component.scss']
})
export class MainPageComponent implements OnInit {
  storeInfo:StoreData;
  constructor() { 
    this.storeInfo=new StoreData('Happy Store',
    ['Cairo', 'Alex', 'Giza'],
    'https://picsum.photos/350/200');
  }

  ngOnInit() {
  }

}
