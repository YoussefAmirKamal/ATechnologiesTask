import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Card/Card.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorModule } from 'primeng/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgApexchartsModule } from 'ng-apexcharts';
import { chartComponent } from './Chart/chart.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [AppComponent, CardComponent, TableComponent, chartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    TableModule,
    MatPaginatorModule,
    PaginatorModule,
    NgxPaginationModule,
    NgApexchartsModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
