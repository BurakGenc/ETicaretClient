import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner'

export class BaseComponent  {
  constructor(private spinner: NgxSpinnerService){}

  showSpinner(spinnerType:SpinnerType){
    this.spinner.show(spinnerType);

setTimeout(()=>this.hideSpinner(spinnerType),1000);

  }
  hideSpinner(spinnerType:SpinnerType){
    this.spinner.hide(spinnerType);
  }
}

export enum SpinnerType{
  BallSpinClocWise="s1",
  LineSpinFade="s2",
  SquareJelly="s3",
}