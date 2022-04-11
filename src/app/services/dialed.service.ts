import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DialedService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private httpClient: HttpClient) { }
  //get agent details
  public getAgentCalls(){
    return this.httpClient.get(`http://localhost:2025/get-dialed-call`,this.httpOptions);
  }
}
