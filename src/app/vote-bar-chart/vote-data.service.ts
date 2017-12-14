import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Vote} from './data';
import {CognitoService} from '../cognito.service';


@Injectable()
export class VoteDataService {

  private voteBase = 'https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/v1/candidates';
  private headers = {'Content-Type': 'application/json'};

  constructor(private http: Http,
              private cognito: CognitoService) {
  }

  getVotes(candidateId: string): Promise<Vote[]> {
    const request = (validJwtToken) => {
      const h = this.authHeader(validJwtToken);
      return this.http.get(this.voteUrl(candidateId), {headers: h})
        .toPromise()
        .then(response => response.json().votes as Vote[])
        .catch(this.handleError);
    };

    return this.cognito.getCurrentUserIdToken().then(jwtToken => request(jwtToken));
  }

  private voteUrl(candidateId: string): string {
    return `${this.voteBase}/${candidateId}/votes`;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private authHeader(validJwtToken: string): Headers {
    const header = this.headers;
    header['Authorization'] = validJwtToken;
    return new Headers(header);
  }

}
