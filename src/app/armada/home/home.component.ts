//import { SocialUser, SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // user: SocialUser | null; 

  // constructor(private authService: SocialAuthService) 
  // { 
	// this.user = null;
	// this.authService.authState.subscribe((user: SocialUser) => {
	//   console.log(user);
	//   this.user = user;
	// });
  // }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => console.log(x));
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }  

  ngOnInit(): void {
  }

}
