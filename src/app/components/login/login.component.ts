import { Component, OnInit } from '@angular/core';
import { UserForLogin } from 'src/app/models/userForLogin';
import { AuthService } from 'src/app/services/auth.service';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[BackgroundService]
})
export class LoginComponent implements OnInit {
  
  constructor(private bgService:BackgroundService,private authService:AuthService) {}
  imagePath=""
  ngOnInit(): void {
    this.bgService.getBackground().subscribe(data=>{
      this.imagePath=data.hdurl
    })
    
  }

  userForLogin:UserForLogin={
    password:"",
    usernameOrEmail:""
  }

  login(user:UserForLogin){
    this.authService.login(user)
  }

}
