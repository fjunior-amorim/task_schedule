import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { CalendarioComponent } from '../calendario/calendario.component';
import { RelogioComponent } from '../relogio/relogio.component';

@NgModule({
  declarations: [
    MainComponent,
    ToDoListComponent,
    ScheduleComponent,
    CalendarioComponent,
    RelogioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MainModule { }
