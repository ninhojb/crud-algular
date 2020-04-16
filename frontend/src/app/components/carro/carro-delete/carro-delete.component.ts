import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CarroService } from './../carro.service';
import { Carros } from './../carro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-delete',
  templateUrl: './carro-delete.component.html',
  styleUrls: ['./carro-delete.component.css']
})
export class CarroDeleteComponent implements OnInit {
  carro: Carros

  constructor(
    private carroService: CarroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.carroService.readById(id).subscribe((carro) => {
      this.carro = carro;
    })
  }

  deleteCarro(): void {
    this.carroService.delete(this.carro.id).subscribe(() => {
      this.carroService.showMessage("Carro excluido com sucesso!")
      this.router.navigate(["/carros"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/carros"]);
  }

}
