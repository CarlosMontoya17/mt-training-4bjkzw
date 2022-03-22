import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Farm } from './farm';
import { HttpHeaders } from '@angular/common/http';

const urlApi = 'https://api.publicapis.org';
const httpsOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Farm>('assets/mock-data.json');
  }

  getAnotherData() {
    return this.http.get(urlApi + '/entries', httpsOptions);
  }
}
