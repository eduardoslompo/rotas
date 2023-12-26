import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  public usuario: Usuario = new Usuario();

  ngOnInit(){
    
  }

  fazerLogin(){
    // console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }
  
}
