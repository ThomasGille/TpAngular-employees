import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public isConnected: boolean;
  public originalUrl: string;
  constructor() { }

  public getOriginalUrl() {
    let url: string = this.originalUrl;
    if (url === '') {
      url = '/home';
    }
    this.originalUrl = '';
    return url;
  }
}
