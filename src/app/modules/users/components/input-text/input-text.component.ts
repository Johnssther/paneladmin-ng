import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() label: string = 'Label';
  @Input() type: string = 'text';
  @Input() submitted: boolean = false;
  @Input() placeholder: string = 'Ingrese un dato';
  @Input() form?: FormGroup;
  @Input() formControlName: string = 'name';
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.form);
    
  }

}
