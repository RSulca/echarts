import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard-echart';
  dataPie: number[];
  dataBar: any[];
  dataBarH: any[];

  constructor() {
    this.dataPie = [];
    this.dataBar = [];
    this.dataBarH = [];
  }

  ngOnInit() {
    setInterval(() => {
      this.dataPie = [];
      this.dataBar = [];
      this.dataBarH = [];
      this.dataPie.push(this.randon());
      this.dataPie.push(this.randon());
      this.dataPie.push(this.randon());
      this.dataBar.push({ name: 'SIR', value: this.randon() });
      this.dataBar.push({ name: 'SARP', value: this.randon() });
      this.dataBar.push({ name: 'SPRN', value: this.randon() });
      this.dataBar.push({ name: 'SPRL', value: this.randon() });
      this.dataBar.push({ name: 'SID', value: this.randon() });
      this.dataBar.push({ name: 'BD', value: this.randon() });
      this.dataBar.push({ name: 'REDES', value: this.randon() });
      this.dataBarH.push({ name: 'REBAGLIATI', value: this.randon() });
      this.dataBarH.push({ name: 'SJL', value: this.randon() });
      this.dataBarH.push({ name: 'SURCO', value: this.randon() });
      this.dataBarH.push({ name: 'MOLINA', value: this.randon() });
      this.dataBarH.push({ name: 'CALLAO', value: this.randon() });
      this.dataBarH.push({ name: 'CAÑETE', value: this.randon() });
      this.dataBarH.push({ name: 'HUACHO', value: this.randon() });
      console.log(this.dataBar);
    }, 2000);
  }

  randon() {
    return Math.floor((Math.random() * (1000 - 200) + 200));
  }

}
