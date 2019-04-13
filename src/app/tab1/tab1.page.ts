import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  article :any;
  constructor(private newsService :NewsService,private router:Router){

  }

  ngOnInit(){
    this.newsService.getData('top-headlines?country=in').subscribe( data =>{
      console.log(data);
      this.article = data;
    })

  }
}
