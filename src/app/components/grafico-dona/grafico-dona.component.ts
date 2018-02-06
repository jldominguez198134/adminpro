import { Component, OnInit, Input } from '@angular/core';
import { Graficas1Component } from '../../pages/graficas1/graficas1.component';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartLeyenda: string = '';
  @Input() doughnutChartType: string = '';

  constructor(private _garaph: Graficas1Component) {}

  ngOnInit() {
  }

}
