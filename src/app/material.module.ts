import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
