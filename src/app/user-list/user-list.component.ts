import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:any
  jogok=["SAdmin","Admin", "User"]
  constructor(private auth:AuthService){
    this.auth.getUsers().subscribe(
      (res)=>{
        this.users=res
        for (let i = 0; i <this.users.length; i++) {
          this.auth.getClaims(this.users[i].id).subscribe(
            (claims)=> this.users[i].claims=claims
          )          
        }
      }
    )
  }
  changeClaims(user:any,jog:any){
    console.log(this.users)
    console.log("user:",user)
    let i=0;
    for (i = 0; i < this.users.length; i++) {
      if (this.users[i].id==user.id) break;      
    }
   
    console.log("i:",user)
    console.log("i:",i)
    console.log("i:",i)
    if (this.users[i].claims.includes(jog)){
      this.users[i].claims= this.users[i].claims.filter(
        (j:any)=>j != jog
      )
    }
    else {
      this.users[i].claims.push(jog)
    }
    this.auth.setClaims(this.users[i].id,this.users[i].claims).subscribe(
      {
        next:()=>console.log("Sikeres jog beállítás"),
        error:()=>console.log("Sikertelen jog beállítás"),
      }
    )
  }
}
