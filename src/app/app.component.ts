import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-food-menu';

  public friesinput: number = 1
  public burgerinput: number = 1
  public sodainput: number = 1

  
  get total(){
    var friesprice:number = 50
    var burgerprice: number = 10
    var sodaprice:number = 30

    var total:number = this.friesinput * friesprice +
    this.burgerinput * burgerprice +
    this.sodainput * sodaprice
    return "$" + total
  }

  get friesorno(){

    if (this.friesinput > 0) {
      document.getElementById("fries")!.style.background = "white"
      document.getElementById("friesorno")!.style.color = "black"
      return "You'll love our Fries"
    } else {
      document.getElementById("fries")!.style.background = "yellow"
      document.getElementById("friesorno")!.style.color = "red"
      return "No Fries Today?" 
    } 
  }

  get burgerorno(){

    if (this.burgerinput > 0) {
      document.getElementById("burger")!.style.background = "white"
      document.getElementById("burgerorno")!.style.color = "black"
      return "You'll love our Burger"
    } else {
      document.getElementById("burger")!.style.background = "yellow"
      document.getElementById("burgerorno")!.style.color = "red"
      return "No Burger Today?" 
    } 
}

get sodaorno(){

  if (this.sodainput > 0) {
    document.getElementById("soda")!.style.background = "white"
    document.getElementById("sodaorno")!.style.color = "black"
    return "You'll love our Soda"
  } else {
    document.getElementById("soda")!.style.background = "yellow"
    document.getElementById("sodaorno")!.style.color = "red"
    return "No Soda Today?" 
  } 
}

incrementfries() {
  this.friesinput++
}

decrementfries() {
  if (this.friesinput > 0) {
    this.friesinput--
  }
}

incrementburger() {
  this.burgerinput++
}

decrementburger() {
  if (this.burgerinput > 0) {
    this.burgerinput--
  }
}

incrementsoda() {
  this.sodainput++
}

decrementsoda() {
  if (this.sodainput > 0) {
    this.sodainput--
  }
}
}
