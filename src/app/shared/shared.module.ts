import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ListGroupComponent,
  ],

  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    NavbarComponent,
    ListGroupComponent,
  ],
})
export class SharedModule {}
