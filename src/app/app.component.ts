import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from './services/admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService:CustomToastrService){
    toastrService.message("Merhaba","Burak", {messageType:ToastrMessageType.Success,position:ToastrPosition.BottomRight});
  }




}

