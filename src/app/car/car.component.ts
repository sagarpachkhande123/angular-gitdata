import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  gitdata:any[]=[];
  constructor(private httpvar : HttpClient) {

    this.httpvar.get<any>('https://api.github.com/users').subscribe(response=>{
      this.gitdata=response;
      console.log(this.gitdata);
    },err=>{
      console.log(err);
    });
   }

  




  ngOnInit() {
  }

}