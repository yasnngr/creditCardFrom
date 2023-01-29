import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>NumberInputComponent),
      multi:true
  }]
})
export class NumberInputComponent implements OnInit,ControlValueAccessor {

  maskValue:any;
  _value:any;
  onChange:any=()=>{};
  onTouch:any=()=>{};
  isDisable:boolean=false

  @Input () label!:string;
  constructor() { }

  writeValue(obj: any): void {
    this._value=obj
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

  mask:any=(deneme:any)=>{
    if(deneme.length===4){
      this._value+'-'
    }
  }

  set value(v:any){
    this.maskValue=v
    this.mask(v)
    this._value=v
    this.onChange(v)
    this.onTouch()
  }


}
