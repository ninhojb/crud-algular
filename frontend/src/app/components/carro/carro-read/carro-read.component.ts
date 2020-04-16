import { CarroService } from './../carro.service';
import { Component, OnInit } from '@angular/core';
import { Carros } from '../carro.model';

@Component({
  selector: 'app-carro-read',
  templateUrl: './carro-read.component.html',
  styleUrls: ['./carro-read.component.css']
})
export class CarroReadComponent implements OnInit {

  carros: Carros[]
  displayedColumns = ['id', 'placa', 'fabricante', 'modelo', 'action']
  constructor(private carroService: CarroService) { }

  ngOnInit(): void {
    this.carroService.read().subscribe(carros => {
      this.carros =carros
    })
  }

}
