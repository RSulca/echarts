import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit, OnChanges {

  options: any;
  @Input() dataPadre: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.dataPadre = this.dataPadre.sort((a, b) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0));
    if (this.dataPadre.length !== 0) {
      this.options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [this.dataPadre[0].name, this.dataPadre[1].name, this.dataPadre[2].name, this.dataPadre[3].name, this.dataPadre[4].name, this.dataPadre[5].name, this.dataPadre[6].name],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        color: '#2cc756',
        series: [
          {
            name: 'Notificaciones',
            type: 'bar',
            realtimeSort: true,
            barWidth: '60%',
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
              position: 'top',
              valueAnimation: true
            }
          }
        ],
        animationDuration: 0,
        animationDurationUpdate: 1000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      }
    }
  }

}
