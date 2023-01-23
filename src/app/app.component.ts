import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task4search';
  httpdata : any;
  val:any;
  bool = false;
  c : any= undefined;
  constructor(private http: HttpClient){}

  keyvalue(key: any,val : number){
    this.http.get("https://jsonplaceholder.typicode.com/"+key).subscribe((data)=>{
     this.httpdata=data;
     this.val=val;
     console.log(this.httpdata)
    })
  }
  
  
  assign(val:any){
   this.c= +val;
   console.log(this.c);
   this.bool=true;
  }
}
