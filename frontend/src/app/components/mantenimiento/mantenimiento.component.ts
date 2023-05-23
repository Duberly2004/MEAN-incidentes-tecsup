import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent {
  @Input() title: string = "";
  @Input() id: string = "";
  @Input() description: string = "";
}
