import { SocialUser, SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: SocialUser | null; 

  constructor(private authService: SocialAuthService) 
  { 
    this.user = null;
    this.authService.authState.subscribe((user: SocialUser) => {
      this.user = user;
      localStorage.setItem('username', user.name);
      localStorage.setItem('googleId', user.idToken);
      localStorage.setItem('userEmail', user.email);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => 
      {
        localStorage.setItem('username', x.name);
        localStorage.setItem('googleId', x.idToken);
        localStorage.setItem('userEmail', x.email);
      });
  }

  isAlowedWrite() {
    if (this.user.email == 'dornellaskj@gmail.com' || this.user.email == 'rainbow2932@gmail.com') {
      return true;
    }
  }

  signOut(): void {
    this.authService.signOut();
  }  

  ngOnInit(): void {
  }

}
