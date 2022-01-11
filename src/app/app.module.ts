import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { ChartsModule, WavesModule } from 'angular-bootstrap-md'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartComponent } from './Components/line-chart/line-chart.component';
import { RadarChartComponent } from './Components/radar-chart/radar-chart.component';
import { BarChartComponent } from './Components/bar-chart/bar-chart.component';
import { HorizantalBarChartComponent } from './Components/horizantal-bar-chart/horizantal-bar-chart.component';
import { StackedBarChartComponent } from './Components/stacked-bar-chart/stacked-bar-chart.component';
import { PolarAreaChartComponent } from './Components/polar-area-chart/polar-area-chart.component';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './Components/doughnut-chart/doughnut-chart.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    RadarChartComponent,
    BarChartComponent,
    HorizantalBarChartComponent,
    StackedBarChartComponent,
    PolarAreaChartComponent,
    PieChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    ChartsModule, 
    WavesModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
