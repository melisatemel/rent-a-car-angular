import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { ModelsListComponent } from '../../features/models/components/models-list/models-list.component';
import { BrandListComponent } from '../../features/brands/components/brand-list/brand-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, 
    MainLayoutComponent,
    ModelsListComponent,
    BrandListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {
  counter: number= 0;

  sumCounter(sum: number){    //method
    this.counter += sum;
  }

}
