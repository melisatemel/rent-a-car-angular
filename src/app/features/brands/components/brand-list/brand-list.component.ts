import { ModelsApiService } from './../../../models/services/modelsApi.service';
import { BrandApiService } from '../../services/brandApi.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { FormsModule } from '@angular/forms';
import { ModelListItemDto } from '../../../models/models/model-list-item.dto';
import { SharedModule } from '../../../../shared/shared.module';
import { ListGroupItem } from '../../../../shared/components/list-group/list-group.component';

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandListComponent implements OnInit {
  public list !: BrandListItemDto[];

  selectedBrandId: number = 0;
  
  modelList !: ListGroupItem[];

  constructor(
    private BrandApiService: BrandApiService,
    private change: ChangeDetectorRef,
    private ModelsApiService: ModelsApiService,
  ){}

  ngOnInit(): void {
    this.BrandApiService.getList().subscribe((response) =>{
      this.list = response;
      this.change.markForCheck();
    });
  }

  selectBrand(): void{
    console.log(this.selectedBrandId)
    this.ModelsApiService.getList().subscribe((response) =>{
      
      const filteredResponseList = response.filter((data) => data.brandId==this.selectedBrandId);
    
      this.modelList = filteredResponseList.map((item) =>({
        label: item.name,
      }))

      this.change.markForCheck(); //asenkron yapı olduğundan gerekti ChangeDetectionStrategy.OnPush, kullandığımız için
    })

  }

  

 }
