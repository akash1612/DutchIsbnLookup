import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isbn: string="";
  response: any;
  show: number=0;
  constructor(private http:HttpClient){}
  ngOnInit(){
   }
  search(){
    this.http.get('https://www.booknomads.com/api/v0/isbn/'+ this.isbn)
    .subscribe((response) => {
      this.response=response;
      console.log(this.response);
      if (this.response.error)
        this.show=0;
      else this.show=1;
    })

  }
}
