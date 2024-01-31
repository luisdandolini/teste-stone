import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dolar } from 'src/app/models/dolar';
import { DolarService } from 'src/app/services/dolar.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{
  calculatorForm: FormGroup;
  dolarValue: string | undefined;
  totalValue: any;
  step: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private calculatorService: DolarService  
  ) { 
    this.calculatorForm = this.formBuilder.group({
      dolar: ['', Validators.required],
      rate: [''],
      paymentType: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.findValueDolar();
  }

  findValueDolar() {
    this.calculatorService.getDolar().subscribe({
      next: (response: Dolar) => {
        console.log(response);
        this.dolarValue = response.USDBRL.bid;
      }
    })
  }

  calculate() {
    const valorDolar = this.calculatorForm.value.dolar;
    const impostoEstado = this.calculatorForm.value.rate;
    const IOFMoney = valorDolar * 0.01;
    const IOFCard = valorDolar * 0.06;

    if (this.calculatorForm.value.paymentType === 'money') {
      this.totalValue = (valorDolar + impostoEstado) * (valorDolar + IOFMoney);
    } else if (this.calculatorForm.value.paymentType === 'card') {
      this.totalValue = (valorDolar + impostoEstado) * valorDolar;
    }

    this.step = 2;
    
    return this.totalValue.toFixed(2);
  }
 
  back() {
    this.step = 1;
    this.calculatorForm.reset();
  }
}
