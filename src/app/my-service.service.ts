import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<string[]> {
    return this.http.get<string[]>('https://localhost:44398/api/values')
      .pipe(catchError(e => []));
  }
}
