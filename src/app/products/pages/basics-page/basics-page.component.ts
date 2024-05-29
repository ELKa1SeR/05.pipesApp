import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

    public nameLower: string = "fran";
    public nameUpper: string = "FRAN";
    public fullName: string = "FraN KaiSeR"
}
