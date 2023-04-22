import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  product: any;
  _id = '5de4a2b6a32d0906687812ea';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProductById(this._id).subscribe((response: any) => {
      this.product = response.data;
    });
  }
}
