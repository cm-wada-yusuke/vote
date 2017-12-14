import {Injectable} from '@angular/core';
import * as AWS from 'aws-sdk';
import {AuthenticationDetails, CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
import {environment} from '../environments/environment';

@Injectable()
export class CognitoService {

  public userPool = null;

  constructor() {
    AWS.config.region = environment.region;
    const data = {UserPoolId: environment.userPoolId, ClientId: environment.clientId};
    this.userPool = new CognitoUserPool(data);
  }

  signIn(username, password, callBack) {
    const userData = {
      Username: username,
      Pool: this.userPool,
      Storage: localStorage
    };
    const cognitoUser = new CognitoUser(userData);
    const authenticationData = {
      Username: username,
      Password: password,

    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        alert('SignIn is success!');
        console.log('id token : ' + result.getIdToken().getJwtToken());
        console.log('access token : ' + result.getAccessToken().getJwtToken());
        console.log('refresh token : ' + result.getRefreshToken().getToken());
        if (callBack) {
          callBack();
        }
      },
      onFailure: function (err) {
        alert(err);
      },

      newPasswordRequired: function (userAttributes, requiredAttributes) {
        delete userAttributes.email_verified;
        cognitoUser.completeNewPasswordChallenge('12345678', userAttributes, this);
      }
    });
    return;
  }

  signOut() {
    console.log('sign out!');
    const currentUser = this.userPool.getCurrentUser();
    if (currentUser) {
      currentUser.signOut();
    }
  }

  getCurrentUserIdToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.userPool.getCurrentUser().getSession((err, session) => {
        if (err) {
          reject(err);
        } else {
          resolve(session.getIdToken().getJwtToken());
        }
      });
    });
  }
}
