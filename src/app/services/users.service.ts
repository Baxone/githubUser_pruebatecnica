import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /* https://api.github.com/search/users?q=YOUR_NAME. */
  /* https://api.github.com/users/YOUR_NAME */
  baseUrl: string = 'https://api.github.com/';

  constructor(private httpClient: HttpClient) { }

  getUsersByName(pName: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}search/users?q=${pName}`))
  }

  getUserByLogin(pLogin: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}users/${pLogin}`))
  }
}
