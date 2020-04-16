import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carros } from './../carro.model';
import { CarroService } from './../carro.service';

@Component({
  selector: 'app-carro-update',
  templateUrl: './carro-update.component.html',
  styleUrls: ['./carro-update.component.css']
})
export class CarroUpdateComponent implements OnInit {
  carro: Carros

  constructor(
    private carroService: CarroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.carroService.readById(id).subscribe((carro) => {
      this.carro = carro
    })
  }
  updateCarro(): void {
    this.carroService.update(this.carro).subscribe(() => {
      this.carroService.showMessage("Carro atualizado com sucesso!");
      this.router.navigate(["/carros"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/carros"]);
  }

}
