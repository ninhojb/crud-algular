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
      icon: 'person',
      routeUrl: '/carros'
    }
  }

  ngOnInit(): void {
  }
  navigateToCarroCreate(): void {
    console.log('teste')
    // this.router.navigate(['/products/create'])
  }

}
