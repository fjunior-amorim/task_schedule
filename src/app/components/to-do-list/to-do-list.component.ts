import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit{
  lista: string[] = [];
  listaVazia: boolean = true;

  validList() {
    if(this.lista.length == 0) {
      this.listaVazia = true;
    }else {
      this.listaVazia = false;
    }
  }

  addtarefa(tarefa: string) {
    if (tarefa == '') {
      console.log(tarefa)
    } else {
      this.lista.push(tarefa);
      this.validList();
    }
  }

  removeTarefa(index: number) {
    //console.log(index);
    this.lista.splice(index, 1)
    this.validList();
  }

  ngOnInit() {
    this.validList();
  }
}
