import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InsertedSuccess, UniqueConstraintError,  Read,Csesubjects } from './csesubjects';
@Injectable({
  providedIn: 'root'
})
export class CsesubjectsService {
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = "http://localhost:4000/";
  Read(catg: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}sem_subjects/Read${catg}`);
  }
}
