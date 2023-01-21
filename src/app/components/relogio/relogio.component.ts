import { Component, OnInit } from '@angular/core'
import { interval } from 'rxjs'

@Component({
  selector: 'relogio',
  templateUrl: './relogio.component.html',
  styleUrls: [ 
    './relogio.component.scss' 
  ],
})
export class RelogioComponent implements OnInit {
  data: string = ''
  ano: string = ''
  dia: string = ''
  horas: string = ''
  minutos: string = ''

  months: string[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'April',
    'Maio',
    'Junho',
    'Julho',
    'Augosto',
    'Setembro',
    'Outobro',
    'Novembro',
    'Decembro',
  ]

  days: string[] = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]

  getData(): any {
    const dia = new Date().getDate()
    const mes = this.getMes()
    return `${dia} de ${mes}`
  }

  getDia() {
    const d = new Date()
    let day = this.days[d.getDay()]
    return day
  }

  getMes() {
    const d = new Date()
    let month = this.months[d.getMonth()]
    return month
  }

  getYear() {
    const d = new Date()
    let year = d.getFullYear()
    return `${year}`
  }

  updateHours() {
    let contador = interval(1000)
    contador.subscribe((n) => {
      this.getHours()
    })
  }

  getHours() {
    const h = new Date().getHours()
    const m = new Date().getMinutes()

    if (h < 10) {this.horas = `0${h}`}
    else {this.horas = `${h}`}

    if (m < 10) {this.minutos = `0${m}`}
    else {this.minutos = `${m}`}
    
  }

  ngOnInit() {
    this.updateHours()
    this.ano = this.getYear()
    this.dia = this.getDia()
    this.data = this.getData()
  }
}
