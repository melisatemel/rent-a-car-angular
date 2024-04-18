import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModelsListComponent } from "../../features/models/components/models-list/models-list.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-models-page',
    standalone: true,
    templateUrl: './models-page.component.html',
    styleUrl: './models-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ModelsListComponent
    ]
})
export class ModelsPageComponent { }
