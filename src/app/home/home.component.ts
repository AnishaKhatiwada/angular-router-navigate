import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    /* SetTimeout is invoked after 3 seconds and then navigates to the services route  
     
    SetTimeout if a function in javascript that takes a function to execute as its argument.
    */

     
    setTimeout( ()=>{
      this.router.navigate([`/services`]);
    }, 3000)

   }

  ngOnInit() {
  }

}