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

  getSubCategoryByCatId(catId: number): Observable<any> {
    return this.http.get<any>(
      `${this.BASE_URL}/subcategory/${catId}`
    );
  }

  getProductsByCatId(catId: number): Observable<any> {
    return this.http.get<any>(
      `${this.BASE_URL}/products/cat/${catId}`
    );
  }

  getProductById(id: any): Observable<any> {
    return this.http.get<any>( `${this.BASE_URL}/products/${id}`
    );
  }

}
