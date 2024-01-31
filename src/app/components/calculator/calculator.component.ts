import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  calculatorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.calculatorForm = this.formBuilder.group({
      dolar: [''],
      rate: ['']
    });
  }
}
