import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cats:any
  constructor(private auth:AuthService){}

  register(){

    let user={
      "username": "Admin",
      "firstName": "Admin",
      "lastName": "Admin",
      "email": "Admin@example.com",
      "password": "Almafa12;"
    }
    this.auth.registration(user)
  }
  login(){
    let user= {
      "username": "Admin",
      "password": "Almafa12;"
    }
    this.auth.login(user)
  }

  getCats(){
    this.auth.getCats().subscribe(
      (res)=>this.cats=res
    )
  }
}
