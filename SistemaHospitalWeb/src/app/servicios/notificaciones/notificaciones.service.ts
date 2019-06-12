import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor() { }

  public notificaciones: number = 0;

  private hubConnection: signalR.HubConnection
 
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('http://localhost:58853/notificaciones')
                            .build();
 
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

   agregarnoticicacion(){
    this.hubConnection.on('solicitarPaciente', (data) => {
      console.log("Solicito");
      this.notificaciones++;
    });
  }
}
