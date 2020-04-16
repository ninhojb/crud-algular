import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-crud',
  templateUrl: './carro-crud.component.html',
  styleUrls: ['./carro-crud.component.css']
})
export class CarroCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Carros',
      icon: 'directions_car',
      routeUrl: '/carros'
    }
  }

  ngOnInit(): void {
  }
  navigateToCarroCreate(): void {
    this.router.navigate(['/carros/create'])
  }

}
