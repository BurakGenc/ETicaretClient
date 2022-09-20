import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit {
  
  constructor(spinner:NgxSpinnerService ,private productService:ProductService,private alertify:AlertifyService) { 
    super(spinner)
  }

  ngOnInit(): void { 
  }

  @Output() createdProduct: EventEmitter<Create_Product>= new EventEmitter();


  create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){
    this.showSpinner(SpinnerType.BallSpinClocWise)
    const create_product: Create_Product =new Create_Product();

    create_product.name=name.value;
    create_product.stock=parseInt(stock.value);
    create_product.price=parseInt(price.value);

    this.productService.create(create_product,()=>
    {
      this.alertify.message("Ürün Başarıyla Eklenmiştir",{messageType:MessageType.Success,dismissOthers:true,position:Position.BottomRight})
      this.hideSpinner(SpinnerType.BallSpinClocWise);
      this.createdProduct.emit(create_product);
    },errorMessage=>{
     this.alertify.message(errorMessage,{
      dismissOthers:true,
      messageType:MessageType.Error,
      position:Position.TopRight,
      
     });
    });
  }

}

