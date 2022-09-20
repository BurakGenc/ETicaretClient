import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';
import { List_Product } from 'src/app/contracts/list-product';

import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }



create(product:Create_Product,succesCallBack?: ()=>void ,errorCallBack?: (errorMessage:string)=>void){

  this.httpClientService.post({
    controller:"products"
  },product).subscribe({
    next :(result)=>{
    succesCallBack();
   },
   
   error : (errorResponse:HttpErrorResponse)=>{
    const _error:Array<{key:string,value:Array<String>}>= errorResponse.error;
    let message="";
    _error.forEach((v,i)=>{
      v.value.forEach((_v,_i)=>{
        message+=`${_v}<br>`;
    });
  });
  errorCallBack(message);
  }});


}

async read(page:number=0,size:number=5,succesCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void): Promise<{totalCount:number,products:List_Product[]}>{
  const promiseData:Promise<{totalCount:number,products:List_Product[]}>= this.httpClientService.get<{totalCount:number,products:List_Product[]}>({
    controller:"products",
    queryString:`page=${page}&size=${size}`
  }).toPromise();

  promiseData.then(d=>succesCallBack()).catch((errorRespose:HttpErrorResponse)=> errorCallBack(errorRespose.message))
  return await promiseData;
  }
}
