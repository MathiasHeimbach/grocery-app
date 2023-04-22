import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  catId = 3;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProductsByCatId(this.catId).subscribe((response: any) => {
      this.products = response.data;
    })
  }

}
