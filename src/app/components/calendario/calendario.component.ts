import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  months: string[] = [
    "Janeiro","Fevereiro","Março","April",
    "Maio","Junho","Julho","Augosto",
    "Setembro","Outobro","Novembro","Decembro"
  ];

  date: Date = new Date();
  day: string = this.date.toDateString();
  month: string = '';
  weeksDays: string[] = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEc', 'SAB'];

  
  
  lastDay = new Date(this.date.getFullYear(), 
  this.date.getMonth() + 1, 0
  ).getDate();

  prevLastDay = new Date(this.date.getFullYear(),
   this.date.getMonth(), 0
  ).getDate();
  firstDayIndex = this.date.getDay();

  lastDayIndex = new Date(this.date.getFullYear(), 
  this.date.getMonth() + 1, 0
  ).getDay();
  nextDaysMonth = 7 - this.lastDayIndex - 1;

  monthDays: number[] = [];
  nextDays: number[] = [];
  firstDays: number[] = [];

  constructor() {  }

  getMonthDays() {
    for (let i = 1; i <= this.lastDay; i++) {
      this.monthDays.push(i);
    }

    for (let i = this.firstDayIndex; i > 0; i--) {
      this.firstDays.push(this.prevLastDay - i);
    }

    for (let i = 1; i <= this.nextDaysMonth; i++) {
      this.nextDays.push(i);
    }

  }
  cont: number = this.date.getMonth();
  onClickNext() {
    if(this.cont < 0) {
      this.cont = 11;
      this.getMonths(this.cont);
    }else if(this.cont === 12) {
      this.cont = 0;
      this.getMonths(this.cont);
    }else {
      this.getMonths(this.cont++);
      console.log(this.cont)
    }
  }
  onClickPrev() {
    if(this.cont < 0 || this.cont === -1) {
      this.cont = 11;
      this.getMonths(this.cont);
    }else if(this.cont === 12) {
      this.cont = 0;
      this.getMonths(this.cont);
    }else {
      this.getMonths(this.cont--);
      console.log(this.cont)
    }
  }

  //metodo para pegar o index do mes e passar para o array dos messes
  getMonths(mes: number) {
    const d = new Date();
    //o mes e setado de acordo com o valor recebido do parametro
    d.setMonth(mes);
    this.month = this.months[d.getMonth()];
    this.months[d.getMonth()];
  }

  ngOnInit() {
    console.log(this.prevLastDay)
    console.log(this.firstDayIndex)
    this.getMonthDays();
    this.getMonths(this.cont);
    
  }
}
