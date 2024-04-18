import { ModelsApiService } from './../../services/modelsApi.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModelListItemDto } from '../../models/model-list-item.dto';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit{
  public list !: ModelListItemDto[];

  constructor(
    private ModelsApiService: ModelsApiService, 
    private change: ChangeDetectorRef
  ){}

  ngOnInit(): void{
    //Callled after the constructor, initializing input properties, and the first call
    //Add ' implements OnInit' to the class.
    this.ModelsApiService.getList().subscribe((response) =>{
      this.list = response;
      this.change.markForCheck(); //asenkron yapı olduğundan gerekti ChangeDetectionStrategy.OnPush, kullandığımız için
    });

  }

}
