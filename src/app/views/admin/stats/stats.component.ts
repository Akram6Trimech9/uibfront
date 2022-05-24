import { Component, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'chart.js'
import { AgenceService } from 'src/app/services/agence.service';
import { RdvService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  conseillers : string []= [];
  rdvs : number []= [];
  agences : number [] = [];
  conseillersperAgence : number[] = []

  constructor(private rdvService: RdvService,private agenceService : AgenceService) { }

  ngOnInit(): void {
    
    this.agenceService.get().subscribe(res=>{
      console.log(res);
      this.conseillersperAgence = res.map((rdv:any)=>{
         return rdv.conseillers.length
        })
        this.agences = res.map((rdv:any)=>{
          return rdv.title
         })

    })

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
  const data_agence = {
    labels:this.agences,
    datasets: [{
      label: 'Conseillers par agence',
      backgroundColor: '#343a40',
      borderColor: '#343a40',
      data: this.conseillersperAgence
    }]
};
  
  
  const config: ChartConfiguration = {
    type: 'bar',
    data: data,
    options: options
  }
  const configagence: ChartConfiguration = {
    type: 'bar',
    data: data_agence,
    options: options
  }
  const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem
  const chartItemagence: ChartItem = document.getElementById('my-chart-agence') as ChartItem


  new Chart(chartItem, config)
  new Chart(chartItemagence, configagence)

  
  

      })

  }

}
