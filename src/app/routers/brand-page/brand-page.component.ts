import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrandListComponent } from "../../features/brands/components/brand-list/brand-list.component";

@Component({
    selector: 'app-brand-page',
    standalone: true,
    templateUrl: './brand-page.component.html',
    styleUrl: './brand-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        BrandListComponent
    ]
})
export class BrandPageComponent { }
