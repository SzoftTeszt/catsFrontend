import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:any
  constructor(private http: HttpClient) { }

  registration(user:any){
    this.http.post("https://localhost:5001/api/Authentication/register", user).subscribe(
      {
        next: ()=>console.log("Sikeres regisztráció"),
        error: ()=>console.log("Siketelen regisztráció")
      }
    )
  }
  login(user:any){
    this.http.post("https://localhost:5001/api/Authentication/login", user).subscribe(
      {
        next: (res:any)=>{
          console.log("Sikeres login",res)
          this.token=res.token
      },
        error: ()=>console.log("Siketelen login")
      }
    )
  }

  getCats(){
    let headers= new HttpHeaders().set('Authorization','Bearer '+this.token)
    return this.http.get("https://localhost:5001/api/Cats", {headers:headers})
  }
}
