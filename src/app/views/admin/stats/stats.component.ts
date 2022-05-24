import { Component, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'chart.js'
import { RdvService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  conseillers : string []= [];
  rdvs : number []= [];

  constructor(private rdvService: RdvService) { }

  ngOnInit(): void {

    this.rdvService.getrdvs().subscribe(res=>{

      this.conseillers=res.map((val : any) =>{
        return val.conseiller
      })
      this.rdvs=res.map((val : any) =>{
        return val.rdvs
      })

      Chart.register(...registerables);
      const options = {
        scales: {
          y: {
            beginAtZero: true,
            display: false
          }
        }
      }
      const data = {
        labels:this.conseillers,
        datasets: [{
          label: 'Rendez-vous par conseiller',
          backgroundColor: '#eb363c',
          borderColor: '#eb363c',
          data: this.rdvs
        }]
  };
  
  
  const config: ChartConfiguration = {
    type: 'bar',
    data: data,
    options: options
  }
  const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem
  new Chart(chartItem, config)
  
  

      })

  }

}
