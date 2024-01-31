import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  day = new Date();
  month = new Date();
  monthName = this.month.toLocaleDateString('pt-BR', { month: 'long' });
  year = new Date();
  hours = new Date();
}
