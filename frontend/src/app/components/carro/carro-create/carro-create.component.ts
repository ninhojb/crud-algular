import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carros } from './../carro.model';
import { CarroService } from './../carro.service';

@Component({
  selector: 'app-carro-create',
  templateUrl: './carro-create.component.html',
  styleUrls: ['./carro-create.component.css']
})
export class CarroCreateComponent implements OnInit {

  carro: Carros = {
    placa: '',
    fabricante: '',
    modelo: ''
  }

  constructor(
    private carroService: CarroService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createCarro(): void {
    this.carroService.create(this.carro).subscribe(() => {
      this.carroService.showMessage('Carro criado com sucesso!')
      this.router.navigate(["/carros"])
    })
  }

  cancel(): void {
    this.router.navigate(["/carros"])
  }

}
