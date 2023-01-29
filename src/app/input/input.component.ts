import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>InputComponent),
      multi:true
    }
  ]
})
export class InputComponent implements OnInit,ControlValueAccessor {

  _value:any;
  onChange:any=()=>{};
  onTouch:any=()=>{};
  isDisable:boolean=false
  constructor() { }
  writeValue(value: any): void {
    this._value=value
  }
  registerOnChange(fn: any): void {
    this.onChange=fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisable=isDisabled
  }

  ngOnInit(): void {
  }
  set value(v:any){
    this._value=v
    this.onChange(v)
    this.onTouch()
  }

}
