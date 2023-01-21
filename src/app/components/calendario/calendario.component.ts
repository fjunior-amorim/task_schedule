import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

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
  
  date = new Date();
  day = this.date.toDateString();
  month = this.months[this.date.getMonth()];
  lastDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
  weeksDays: string[] = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEc', 'SAB'];

  monthDays: number[] = [];
  nextDays: number[] = [];
  firstDays: number[] = [];

  ngOnInit() {
    this.renderCalendar();
  }

  onClickNext()  {
    this.date.setMonth(this.date.getMonth() + 1)
    this.month = this.months[this.date.getMonth()];
    this.monthDays = [];
    this.firstDays = [];
    this.nextDays = [];
    this.renderCalendar();
  }

  onClickPrev() {
    this.date.setMonth(this.date.getMonth() - 1)
    this.month = this.months[this.date.getMonth()];
    this.monthDays = [];
    this.firstDays = [];
    this.nextDays = [];
    this.renderCalendar();
  }

  renderCalendar() {
    const  lastDayIndex = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    const  firstDayIndex = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    const  nextDayIndex = 7 - lastDayIndex - 1;
    const  prevLastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    const  prevDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();

    for (let i = 1; i <= prevLastDay; i++) {
      this.monthDays.push(i);      
    }

    for (let i = firstDayIndex; i > 0; i--) {
      this.firstDays.push(prevDay + 1 - i);
    }

    for (let i = 1; i <= nextDayIndex; i++) {
      this.nextDays.push(i)
    }
  }
}