import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  FacebookLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'facebook-oauth';

  user!: SocialUser;
  loggedIn: boolean = false;

  constructor(private auth: SocialAuthService) {}

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      console.log(this.user);
    });
  }

  signInWithFB(): void {
    this.auth.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.auth.signOut();
  }
}
