import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  catId: any;
  subCategories: any[] = [];

  constructor(private dataService: DataService,
    private activatedRoute: ActivatedRoute) { 
      this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
    }

  ngOnInit(): void {
    this.dataService.getSubCategoryByCatId(this.catId).subscribe((response) => {
      this.subCategories = response.data;
    });
  }

}
