import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginator-nav',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input()
  paginador: any;

  desde: number;
  hasta: number;

  paginas: number[];

  constructor() { }

  ngOnInit() {
    this.paginas = new Array(this.paginador.totalPages).fill(0)
      .map((valor, index) => index + 1);
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.desde = Math.min(Math.max(1, this.paginador.number - 4), this.paginador.totalPages - 5);
    this.hasta = Math.max(Math.min(this.paginador.totalPages,this.paginador.number + 4) , 6);

    if (this.paginador.totalPages > 5) {
      this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((valor, indice) => indice + this.desde);
    } else {
      this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor, indice) => indice + 1);
    }
  }

}
