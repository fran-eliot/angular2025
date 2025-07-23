import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Movimiento } from '../../model/Movimiento';
import { MovimientosService } from '../../service/movimientos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FechaPersonalPipe } from '../../pipes/fecha-personal.pipe';


@Component({
  selector: 'app-movimientos',
  imports: [FormsModule, CommonModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonModule, MatInputModule, FechaPersonalPipe],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent implements AfterViewInit{
  fecha1:Date;
  fecha2:Date;
  // movimientos:Movimiento[];
  displayedColumns: string[] = ['Fecha', 'Cantidad', 'Cuenta','Operacion'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<Movimiento>();


  constructor(private movimientosService:MovimientosService){  }

  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  verMovimientos(){
    this.movimientosService.buscarPorFechas(this.fecha1,this.fecha2)
    .subscribe(data=>this.dataSource.data=data);
  }
}
