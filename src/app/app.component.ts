import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  creditCardForm!:FormGroup
  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.formCreate()
  }
  formCreate(){
    this.creditCardForm=this.fb.group({
      name:['',[
        Validators.required,
        Validators.minLength(3)
      ]],
      cardNumber:['',[
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)
      ]],
      expirationDate:['',[
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
      ]],
      cvv:['',[
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3)
      ]]
    })
  }

  get name(){
    return this.creditCardForm.controls['name']
  }
  get errorName(){
    return this.creditCardForm.get('name')?.errors?.['minlength']
  }
  get cardNumber(){
    return this.creditCardForm.controls['cardNumber']
  }
  get errorCardNumber(){
    return this.creditCardForm.get('cardNumber')?.errors?.['minlength']
  }
  get expirationDate(){
    return this.creditCardForm.controls['expirationDate']
  }
  get cvv(){
    return this.creditCardForm.controls['cvv']
  }

  onSubmit(){
    console.log(this.creditCardForm.value)
  }
  onReset(){
    this.creditCardForm.reset()
  }
}
