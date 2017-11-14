import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Vote} from './data';


@Injectable()
export class VoteDataService {

  private voteBase = 'https://xxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/v1/candidates';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getVotes(candidateId: string): Promise<Vote[]> {
    return this.http.get(this.voteUrl(candidateId), this.headers)
      .toPromise()
      .then(response => response.json().votes as Vote[])
      .catch(this.handleError);
  }

  private voteUrl(candidateId: string): string {
    return `${this.voteBase}/${candidateId}/votes`;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
