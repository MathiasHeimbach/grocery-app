import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

private BASE_URL = 'https://orca-app-jhg4l.ondigitalocean.app/api';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(
      `${this.BASE_URL}/category`
    );
  }
}
