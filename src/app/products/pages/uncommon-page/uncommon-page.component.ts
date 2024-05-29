import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name : string = 'Fran';
  public gender: 'male'|'female'= 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string [] = ['Maria',' Fernando',' Dani',' Alejandro',' Laura',' Isabel',' Antonio']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando',

  }
  deleteClient():void{
    this.clients.shift();
  }


}
