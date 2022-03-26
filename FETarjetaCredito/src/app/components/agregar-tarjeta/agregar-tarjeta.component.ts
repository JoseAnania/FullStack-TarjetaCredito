import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaApiService } from '../../services/tarjeta-api.service';
import { ListarTarjetaComponent } from '../listar-tarjeta/listar-tarjeta.component';
import { ViewChild } from '@angular/core'


@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.css'],
})
export class AgregarTarjetaComponent implements OnInit {

  @ViewChild(ListarTarjetaComponent) listarComponent: ListarTarjetaComponent | undefined;

  // declaramos la propiedad del Formulario Reactivo
  form: FormGroup;

  // inyectamos el constructor del Formulario
  // inyectamos el Servicio
  // inyectamos Toastr
  constructor( private fb: FormBuilder,
               private tarjetaApiService: TarjetaApiService,
               private toastr: ToastrService ) {

    // construimos el objeto que llenará el formulario con sus validaciones
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
   }

  ngOnInit(): void {

    this.listarComponent?.obtenerTarjetas();
  }

  // Método para agregar una tarjeta
  agregarTarjeta() {

    // creamos un objeto y lo llenamos con lo cargado en el Formulario
    const tarjeta: any = {

      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    
    this.tarjetaApiService.saveTarjeta(tarjeta).subscribe(data =>{

      // mostramos el mensaje con Toastr
      this.toastr.success('La tarjeta fue agregada con éxito!', 'Tarjeta Registrada!');

      // agregamos la tarjeta en el Listado
      this.listarComponent?.obtenerTarjetas();

      // reseteamos el Formulario
      this.form.reset();
    }, error =>{
      console.log(error);
    }) 
  }
}

