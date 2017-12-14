import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CognitoService} from '../cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cognitoService: CognitoService) {
  }

  ngOnInit() {
    this.cognitoService.signOut();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    const gotoChart = (router: Router, cognitoService: CognitoService) => {
      let timerID = setInterval(() => {
        console.log(cognitoService.userPool.getCurrentUser());
        if (cognitoService.userPool.getCurrentUser()) {
          // wait終了時の後処理
          router.navigate(['/chart']);
          clearInterval(timerID);
          timerID = null;
          this.loading = false;
        }
      }, 100);
    };
    this.cognitoService.signIn(this.model.username, this.model.password, gotoChart.bind(null, this.router, this.cognitoService));
  }
}
