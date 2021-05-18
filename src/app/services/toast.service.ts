import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  show(message:string = 'Erfolgreich ausgeführt!' ,color:string = 'dark', duration:number = 2000 ) {
    this.toastController.create({
      color: color,
      duration: duration,
      message: message,
    }).then(toast => {
      toast.present();
    });
    
  }
}
