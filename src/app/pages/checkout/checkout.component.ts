import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private User:AuthService) { }
  isUser:boolean;
  ngOnInit() {
    this.User.User.subscribe(u=>{
      if(u){
        this.isUser = true;
        console.log("is user");
        
      }else {
        this.isUser = false;

        console.log("not user");
        
      }

    })
  }

}
