import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaApiService } from '../../services/tarjeta-api.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  // definimos un arreglo vacío que luego lo llenaremos con el objeto del Servicio
   @Input() listTarjetas: any[] = [];

   // inyectamos los Servicios
   // inyectamos Toastr
  constructor( private tarjetaApiService: TarjetaApiService,
               private toastr: ToastrService) { }

  ngOnInit(): void {
    // al iniciar la página cargamos la lista de Tarjetas
    this.obtenerTarjetas();
  }

  // Método para Listar las Tarjetas
  obtenerTarjetas() {
    this.tarjetaApiService.getListTarjetas().subscribe(data =>{
      console.log(data);
      // llenamos el objeto con la BD
      this.listTarjetas = data;
    }, error => {
      console.log(error);
    })
  }

  // Método para Eliminar una Tarjeta
  eliminarTarjeta(id: number) {

    // eliminamos la tarjeta correspondiente al id
    this.tarjetaApiService.deleteTarjeta(id).subscribe(data =>{
      // mostramos mensaje con Toastr
      this.toastr.error('La Tarjeta fue eliminada con éxito!', 'Tarjeta Eliminada!');

      // cargamos la lista de tarjetas
      this.obtenerTarjetas();
    }, error => {
      console.log(error);
    })
  }
}
