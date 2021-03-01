import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-bar-h',
  templateUrl: './bar-h.component.html',
  styleUrls: ['./bar-h.component.css']
})
export class BarHComponent implements OnInit, OnChanges {

  @Input() dataPadre: any[] = [];
  option: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.dataPadre = this.dataPadre.sort((a, b) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0));
    if (this.dataPadre.length !== 0) {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          max: 'dataMax',
        },
        yAxis: {
          type: 'category',
          data: [this.dataPadre[0].name, this.dataPadre[1].name, this.dataPadre[2].name, this.dataPadre[3].name, this.dataPadre[4].name, this.dataPadre[5].name, this.dataPadre[6].name],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 6 // only the largest 3 bars will be displayed
        },
        series: [{
          realtimeSort: true,
          name: 'Notificaciones',
          type: 'bar',
          data: [{
            value: this.dataPadre[0].value,
            itemStyle: { color: '#3ec73a' }
          }, {
            value: this.dataPadre[1].value,
            itemStyle: { color: '#3ec73a' }
          }, {
            value: this.dataPadre[2].value,
            itemStyle: { color: '#3ec73a' }
          }, {
            value: this.dataPadre[3].value,
            itemStyle: { color: '#3ec73a' }
          }, {
            value: this.dataPadre[4].value,
            itemStyle: { color: '#3ec73a' }
          }, {
            value: this.dataPadre[5].value,
            itemStyle: { color: '#3ec73a' }
          }, {
            value: this.dataPadre[6].value,
            itemStyle: { color: '#3ec73a' }
          }],
          label: {
            show: true,
            position: 'right',
            valueAnimation: true
          }
        }],
        legend: {
          show: false
        },
        animationDuration: 0,
        animationDurationUpdate: 1000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      };
    }
  }

}
