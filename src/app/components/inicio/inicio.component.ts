import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad: number = 18;
  peso: number = 60; 
  altura: number = 170;
  genero: string = 'Masculino';


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any): void {
    this.altura = event.target.value;
  }

  femenino(): void {
    this.genero = 'Femenino';
  }

  masculino(): void {
    this.genero = 'Masculino';
  }

  calcularIMC(): void {
    const imc = this.peso / Math.pow(this.altura / 100, 2);
    this.router.navigate(['/resultado', imc.toFixed(1)]);
  }

}
