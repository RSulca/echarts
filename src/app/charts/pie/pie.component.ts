import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit, OnChanges {

  @Input() dataPadre:number[] = [];

  theme: string;
  options:any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.dataPadre.length !== 0){
      this.options = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Gravedad',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            color: ['#38d958', '#edea37', '#f03824'],
            data: [
              { value: this.dataPadre[0], name: 'Avisos' },
              { value: this.dataPadre[1], name: 'Zonales' },
              { value: this.dataPadre[2], name: 'Masivos' }
            ]
          }
        ]
      };
    }
  }

}
