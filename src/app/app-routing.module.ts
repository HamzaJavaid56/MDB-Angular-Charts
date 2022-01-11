import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './Components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './Components/doughnut-chart/doughnut-chart.component';
import { HorizantalBarChartComponent } from './Components/horizantal-bar-chart/horizantal-bar-chart.component';
import { LineChartComponent } from './Components/line-chart/line-chart.component';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './Components/polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './Components/radar-chart/radar-chart.component';
import { StackedBarChartComponent } from './Components/stacked-bar-chart/stacked-bar-chart.component';

const routes: Routes = [
{
    path:'line',
    component:LineChartComponent
}
,
{
    path:'bar',
    component:BarChartComponent
}
,
{
    path:'doughnut',
    component:DoughnutChartComponent
}
,
{
    path:'horizantal',
    component:HorizantalBarChartComponent
}
,
{
    path:'polar-area',
    component:PolarAreaChartComponent
}
,
{
    path:'redar',
    component:RadarChartComponent
}
,
{
    path:'stacked',
    component:StackedBarChartComponent
}
,
{
    path:'pie',
    component:PieChartComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }