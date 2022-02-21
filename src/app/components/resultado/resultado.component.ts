import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  imc: number;
  resultado: string;
  descripcion: string;

  constructor(private route: ActivatedRoute) {
    this.imc = +route.snapshot.paramMap.get('valor')!;
    this.resultado = '';
    this.descripcion = '';
   }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(): void {
    if(this.imc >= 25) {
      this.resultado = 'Exceso de peso';
      this.descripcion = 'Tienes un peso corporal superior al normal. Intente hacer más ejercicio'
    } else if(this.imc >= 18.5 ) {
      this.resultado = 'Normal';
      this.descripcion = 'Tienes un peso corporal normal. ¡Buen trabajo!'
    } else {
      this.resultado = 'Bajo peso';
      this.descripcion = 'Tienes un peso corporal mas bajo de lo normal. Puedes comer un poco más';
    }
  }

}
