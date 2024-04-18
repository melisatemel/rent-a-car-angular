import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { TestPageComponent } from './routers/test-page/test-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { ModelsPageComponent } from './routers/models-page/models-page.component';
import { BrandPageComponent } from './routers/brand-page/brand-page.component';

//Yönlendirmeler burada

export const routes: Routes = [
    //Home
    {
        path: '',   //boş path string
        pathMatch: 'full',  //path boş başladığından full kullandık, prefix= başlangıcında dolu olmalı boş stringlerde full  kullanılır
        redirectTo: 'home', // '' gitmezse home a geç
    },
    {
        path: 'home',                   // ilk karşılaştığı router-outlete yerleştirir (ROUTER-OUTLET ' E BAKTIĞIMIZ YER)
        // pathMatch: 'prefix',    varsayılan yazmasakta olur
        component: MainLayoutComponent,         //Home ın altındaki tüm layoutlar için bunlar kullanılabilir
        children:[
           {
                path: "models", 
                
                component: ModelsPageComponent,
                
          },
          {
            path:"brands",
            component: BrandPageComponent,
          }
        ],
        
    },
    //Test Page
    {
        path: 'layout-test',
        component: TestPageComponent
    },
    //404 Not found page
    {
        path: '**',     //her oathde çalışır. En son yazılmalı(404 not found)
        redirectTo: 'not-found'
    },
    {
        path: 'not-found',     //her oathde çalışır. En son yazılmalı(404 not found)
        component: NotFoundPageComponent,
    }
];
