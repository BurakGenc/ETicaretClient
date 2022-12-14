import { Inject, Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient,@Inject("baseUrl") private baseUrl:string) {}

  private Url(request:Partial<RequestParameters>) :string{
    return `${request.baseUrl? request.baseUrl:this.baseUrl}/${request.controller}${request.action ? `/${request.action}` : ""}`;
  }

    get<T>(request:Partial<RequestParameters>,id?:string): Observable<T>{
       let url:string="";
       if(request.fullEndPoint){
          url=request.fullEndPoint
       }
       else{
        url=`${this.Url(request)}${id ? `/${id}` : ""}${request.queryString ? `?${request.queryString }`:""}`;
        }

      return this.httpClient.get<T>(url,{headers:request.headers})
    
    }

    post<T>(request:Partial<RequestParameters>,body:Partial<T>):Observable<T>{
      let url:string="";

      if(request.fullEndPoint){
        url=request.fullEndPoint;
      }
      else{
        url=`${this.Url(request)}${request.queryString ? `?${request.queryString }`: " "}`
      }


     return this.httpClient.post<T>(url,body,{headers:request.headers});

    }
    put<T>(request:Partial<RequestParameters>,body:Partial<T>):Observable<T>
    {
      let url:string="";
      if(request.fullEndPoint){
        url=request.fullEndPoint;
      }
      else{
        url=`${this.Url(request)}${request.queryString ? `?${request.queryString }`: " "}`
      }


      return this.httpClient.put<T>(url,body,{headers:request.headers})
    }

    delete<T>(request:Partial<RequestParameters>,id:string):Observable<T>{
      let url:string="";
      if(request.fullEndPoint){
        url=request.fullEndPoint;
      }
      else{
        url=`${this.Url(request)}/${id}${request.queryString ? `?${request.queryString }`: " "}`;
      }

      return this.httpClient.delete<T>(url,{headers:request.headers});
    }


   
}


export class RequestParameters{
  controller?:string;
  action?:string;
  queryString?:string;
  headers?: HttpHeaders;
  baseUrl?:string;
  fullEndPoint?:string;

}
