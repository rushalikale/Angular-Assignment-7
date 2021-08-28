import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public str : string = "Marvellous Infosystem";
  constructor(){ }
  public upper() : string
  {
    this.str = this.str.toUpperCase();
    return this.str;
  }
  public lower() : string
  {
    this.str = this.str.toLowerCase();
    return this.str;
  }
}
