import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public items:any;
  constructor(public navCtrl: NavController,public http: Http) {
      this.http = http;
        this.http.get("http://api.randomuser.me/?results=10")
            .subscribe(data =>{
              //console.log(data['_body']);
             this.items=JSON.parse(data['_body']).results;//Bind data to items object
            },error=>{
                console.log(error);// Error getting the data
            } );
  }
 buttonClick(event){
   console.log("button clicked");
   console.log(event);
  }
 
  itemClicked(event,itemData){
    console.log("item clicked");
    console.log(event);
    console.log(itemData);
  }
}
